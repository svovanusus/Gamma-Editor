import { Component, Watch } from 'vue-property-decorator';
import NodeComponentBase from 'components/page/NodeComponentBase';
import ContainerNodeBase from 'logic/model/page/ContainerNodeBase';
import NodeBase from 'logic/model/page/NodeBase';
import CssStylesheet from 'logic/model/style/CssStylesheet';
import { StoreTypes } from 'store';
import BackgroundType from 'logic/model/page/settings/BackgroundType';
import IMediaManagerService from 'logic/services/IMediaManagerService';
import ServiceLocator from 'logic/services/ServiceLocator';

@Component({})
export default class NodeContainerComponentBase<TNode extends ContainerNodeBase> extends NodeComponentBase<TNode> {
  public constructor() {
    super();
    const serviceLocator = ServiceLocator.getInstance();
    this.mediaManagerService = serviceLocator.getService('MediaManagerService');
  }

  public childrenClick(node: NodeBase) {
    this.$store.dispatch(StoreTypes.actions.SELECT_NODE, { node });
  }

  public placeholderClick() {
    this.$store.dispatch(StoreTypes.actions.SELECT_NODE, { node: this.model });
  }

  @Watch('model.background', { deep: true })
  public updateContainerStylesBase(): void {
    this.updateStylesBase();
  }

  protected applyContainerNodeStylesBase(stylesheet: CssStylesheet): void {
    this.applyNodeStylesBase(stylesheet);

    if (this.model.background.type !== BackgroundType.None) {
      const rule = stylesheet.forRule({ id: this.model.id });

      if (this.model.background.type === BackgroundType.Image) {
        rule.setProperty('background-image', `url(${this.getResourceUrl(this.model.background.resourceUid)})`);
      }

      if (this.model.background.type === BackgroundType.Color) {
        rule.setProperty('background-color', this.model.background.color);
      }
    }
  }

  protected applyStyles(stylesheet: CssStylesheet): void {
    this.applyContainerNodeStylesBase(stylesheet);
  }

  private getResourceUrl(resourceUid: string): string {
    if (!resourceUid) return '';
    return this.mediaManagerService.getResourceUrl(resourceUid);
  }

  private mediaManagerService: IMediaManagerService;
}
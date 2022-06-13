import { Component, Watch } from 'vue-property-decorator';
import NodeComponentBase from 'components/page/NodeComponentBase';
import ContainerNodeBase from 'logic/model/page/ContainerNodeBase';
import NodeBase from 'logic/model/page/NodeBase';
import CssStylesheet from 'logic/model/style/CssStylesheet';
import { StoreTypes } from 'store';
import BackgroundType from 'logic/model/page/settings/BackgroundType';
import IMediaManagerService from 'logic/services/IMediaManagerService';
import ServiceLocator from 'logic/services/ServiceLocator';
import BackgroundSizeType from 'logic/model/page/settings/BackgroundSizeType';

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
      const rule = this.model.background.transparency === 0
        ? stylesheet.forRule({ id: this.model.id })
        : stylesheet.forRule({ id: this.model.id, pseudoElement: 'before' });

      if (this.model.background.transparency !== 0) {
        stylesheet.forRule({ id: this.model.id })
          .setProperty('position', 'relative');

        rule.setProperty('content', '""')
          .setProperty('position', 'absolute')
          .setProperty('top', '0')
          .setProperty('left', '0')
          .setProperty('width', '100%')
          .setProperty('height', '100%');
      }

      if (this.model.background.type === BackgroundType.Image) {
        rule.setProperty('background-image', `url(${this.getResourceUrl(this.model.background.resourceUid)})`);

        if (this.model.background.size.type !== BackgroundSizeType.Default) {
          rule.setProperty('background-size', this.model.background.size.toString());
        }

        rule.setProperty('background-position', this.model.background.position.toString());
      }

      if (this.model.background.type === BackgroundType.Color) {
        rule.setProperty('background-color', this.model.background.color);
      }

      if (this.model.background.transparency > 0) {
        rule.setProperty('opacity', ((100 - this.model.background.transparency) / 100).toFixed(2));
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
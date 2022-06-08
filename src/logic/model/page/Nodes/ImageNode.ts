import ISavable from 'logic/model/ISavable';
import NodePropsSavingHelper from 'logic/model/NodePropsSavingHelper';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import NodeBase from 'logic/model/page/NodeBase';
import INodeModel from 'model/INodeModel';
import IMediaManagerService from 'logic/services/IMediaManagerService';
import ServiceLocator from 'logic/services/ServiceLocator';

export default class ImageNode extends NodeBase implements ISavable<ImageNode> {
  public resourceUid: string = __defaults.resourceUid;
  public altText: string = __defaults.altText;
  public title: string = __defaults.title;

  public constructor() {
    super('ImageNodeComponent', NodeTypeEnum.ImageNodeType);

    const locator = ServiceLocator.getInstance();
    this.mediaManagerService = locator.getService('MediaManagerService');
  }

  public get defaultName(): string {
    return 'Image';
  }

  public get resourceUrl(): string {
    if (!this.resourceUid) return '/src/assets/img/image-placeholder.png';
    const resource = this.mediaManagerService.getResource(this.resourceUid);
    return resource?.url ?? '/src/assets/img/image-placeholder.png';
  }

  public get combiledAltText(): string {
    if (this.altText.trim()) return this.altText.trim();

    const resource = this.mediaManagerService.getResource(this.resourceUid);
    return resource?.defaultAlt || '';
  }

  public save(): INodeModel {
    const res = super.save();
    return {
      resourceUid: NodePropsSavingHelper.save(this.resourceUid, __defaults.resourceUid),
      altText: NodePropsSavingHelper.save(this.altText, __defaults.altText),
      title: NodePropsSavingHelper.save(this.title, __defaults.title),
      ...res,
    };
  }

  public load(obj: INodeModel): ImageNode {
    super.load(obj);
    this.resourceUid = NodePropsSavingHelper.get(obj.resourceUid, __defaults.resourceUid) as string;
    this.altText = NodePropsSavingHelper.get(obj.altText, __defaults.altText) as string;
    this.title = NodePropsSavingHelper.get(obj.title, __defaults.title) as string;
    return this;
  }

  private mediaManagerService: IMediaManagerService;
}

const __defaults = {
  resourceUid: null,
  altText: '',
  title: '',
};
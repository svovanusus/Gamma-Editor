import ISavable from 'logic/model/ISavable';
import NodePropsSavingHelper from 'logic/model/NodePropsSavingHelper';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import ContainerNodeBase from 'logic/model/page/ContainerNodeBase';
import IPageDocument from 'logic/model/page/IPageDocument';
import INodeModel from 'model/INodeModel';
import CssStylesheet from '../style/CssStylesheet';

export default class PageDocument
  extends ContainerNodeBase
  implements IPageDocument, ISavable<PageDocument>
{
  public readonly stylesheet: CssStylesheet = new CssStylesheet();

  public title: string = __defaults.title;
  public graphModel: string = __defaults.graphModel;

  public constructor() {
    super('PageDocumentComponent', NodeTypeEnum.PageDocumentNodeType);
  }

  public get defaultName(): string {
    return 'Document';
  }

  public get document(): IPageDocument {
      return this;
  }

  public save(): INodeModel {
    const res = super.save();
    return {
      title: NodePropsSavingHelper.save(this.title, __defaults.title),
      graphModel: NodePropsSavingHelper.save(this.graphModel, __defaults.graphModel),
      ...res,
    };
  }

  public load(obj: INodeModel): PageDocument {
    super.load(obj);
    this.title = NodePropsSavingHelper.get(obj.title, __defaults.title) as string;
    this.graphModel = NodePropsSavingHelper.get(obj.graphModel, __defaults.graphModel) as string;
    return this;
  }
}

const __defaults = {
  title: 'New Page',
  graphModel: '{}',
};

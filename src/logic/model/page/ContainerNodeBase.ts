import ISavable from 'logic/model/ISavable';
import INodeFactory from 'logic/model/INodeFactory';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import IContainerNode from 'logic/model/page/IContainerNode';
import NodeBase from 'logic/model/page/NodeBase';
import INodeModel from 'model/INodeModel';
import ServiceLocator from 'logic/services/ServiceLocator';
import BackgroundSettingsModel, { SavedBackgroundSettings } from 'logic/model/page/settings/BackgroundSettingsModel';

export default abstract class ContainerNodeBase
  extends NodeBase
  implements IContainerNode, ISavable<ContainerNodeBase>
{
  private _nodeFactory: INodeFactory;

  public children: NodeBase[] = [];

  public backgound: BackgroundSettingsModel;

  protected constructor(componentName: string, type: NodeTypeEnum) {
    super(componentName, type);
    this._nodeFactory = ServiceLocator.getInstance().getService<INodeFactory>('NodeFactory');
  }

  public save(): INodeModel {
    const res = super.save();
    return {
      children: this.children.map((node) => node.save()),
      background: this.backgound.save(),
      ...res,
    };
  }

  public load(obj: INodeModel): ContainerNodeBase {
    super.load(obj);

    if (obj.children && (obj.children as INodeModel[]).length) {
      this.children = <NodeBase[]>(obj.children as INodeModel[])
        .map((child) => {
          const node = this._nodeFactory.createNodeByType(child.type, this);
          return node?.load(child);
        })
        .filter((x) => x);
      this.backgound = new BackgroundSettingsModel().load((obj.background ?? {}) as SavedBackgroundSettings);
    }

    return this;
  }
}

import ISavable from 'logic/model/ISavable';
import NodePropsSavingHelper from 'logic/model/NodePropsSavingHelper';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import INode from 'logic/model/page/INode';
import INodeModel from 'model/INodeModel';
import IContainerNode from 'logic/model/page/IContainerNode';
import IPageDocument from './IPageDocument';

export default abstract class NodeBase implements INode, ISavable<NodeBase> {
  public readonly type: NodeTypeEnum;
  public readonly componentName: string;

  public id = '';
  public name = '';
  public notes: string = __defaults.notes;
  public parent: IContainerNode = null;

  protected constructor(componentName: string, type: NodeTypeEnum) {
    this.componentName = componentName;
    this.type = type;
  }

  public abstract get defaultName(): string;

  public get document(): IPageDocument {
    return this.parent?.document;
  }

  public save(): INodeModel {
    return {
      type: this.type,
      id: NodePropsSavingHelper.save(this.id, __defaults.id),
      name: NodePropsSavingHelper.save(this.name, this.defaultName),
      notes: NodePropsSavingHelper.save(this.notes, __defaults.notes),
    };
  }

  public load(obj: INodeModel): NodeBase {
    this.id = NodePropsSavingHelper.get(obj.id, __defaults.id) as string;
    this.name = NodePropsSavingHelper.get(obj.name, this.defaultName) as string;
    this.notes = NodePropsSavingHelper.get(obj.notes, __defaults.notes) as string;
    return this;
  }
}

const __defaults = {
  id: '',
  notes: '',
};

import ISavable from 'logic/model/ISavable';
import NodePropsSavingHelper from 'logic/model/NodePropsSavingHelper';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import INode from 'logic/model/page/INode';
import INodeModel from 'model/INodeModel';
import IContainerNode from 'logic/model/page/IContainerNode';
import IPageDocument from './IPageDocument';
import BoxSpacingSettingsModel, { SavedBoxSpacingSettings } from './settings/BoxSpacingSettingsModel';

export default abstract class NodeBase implements INode, ISavable<NodeBase> {
  public readonly type: NodeTypeEnum;
  public readonly componentName: string;

  public id = '';
  public name = '';
  public notes: string = __defaults.notes;
  public margins: BoxSpacingSettingsModel = __defaults.margins.clone();
  public paddings: BoxSpacingSettingsModel = __defaults.paddings.clone();
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
      margins: NodePropsSavingHelper.save(this.margins.save(), __defaults.margins.save()),
      paddings: NodePropsSavingHelper.save(this.paddings.save(), __defaults.paddings.save()),
    };
  }

  public load(obj: INodeModel): NodeBase {
    this.id = NodePropsSavingHelper.get(obj.id, __defaults.id) as string;
    this.name = NodePropsSavingHelper.get(obj.name, this.defaultName) as string;
    this.notes = NodePropsSavingHelper.get(obj.notes, __defaults.notes) as string;
    this.margins = obj.margins ? new BoxSpacingSettingsModel().load(obj.margins as SavedBoxSpacingSettings) : __defaults.margins.clone();
    this.paddings = obj.paddings ? new BoxSpacingSettingsModel().load(obj.paddings as SavedBoxSpacingSettings) : __defaults.paddings.clone();
    return this;
  }
}

const __defaults = {
  id: '',
  notes: '',
  margins: new BoxSpacingSettingsModel(),
  paddings: new BoxSpacingSettingsModel(),
};

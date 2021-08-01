import ISavable from 'logic/model/ISavable';
import NodePropsSavingHelper from 'logic/model/NodePropsSavingHelper';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import ContainerNodeBase from 'logic/model/page/ContainerNodeBase';
import INodeModel from 'model/INodeModel';

export default class ColumnsContainerNode extends ContainerNodeBase implements ISavable<ColumnsContainerNode> {
  public constructor() {
    super('ColumnsContainerNodeComponent', NodeTypeEnum.ColumnsContainerNodeType);
  }
  
  public gap: number = __defaults.gap;

  public get defaultName(): string {
    return 'ColumnsContainer';
  }
  
  public save(): INodeModel {
    const res = super.save();
    return {
      gap: NodePropsSavingHelper.save(this.gap, __defaults.gap),
      ...res,
    };
  }

  public load(obj: INodeModel): ColumnsContainerNode {
    super.load(obj);
    this.gap = NodePropsSavingHelper.get(obj.gap, __defaults.gap) as number;
    return this;
  }
}

const __defaults = {
  gap: 15,
};
import ISavable from 'logic/model/ISavable';
import NodePropsSavingHelper from 'logic/model/NodePropsSavingHelper';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import ContainerNodeBase from 'logic/model/page/ContainerNodeBase';
import INodeModel from 'model/INodeModel';

export default class SimpleContainerNode
  extends ContainerNodeBase
  implements ISavable<SimpleContainerNode>
{
  public tag: string = __defaults.tag;

  public constructor() {
    super('SimpleContainerNodeComponent', NodeTypeEnum.SimpleContainerNodeType);
  }

  public get defaultName(): string {
    return 'Container';
  }

  public save(): INodeModel {
    const res = super.save();
    return {
      tag: NodePropsSavingHelper.save(this.tag, __defaults.tag),
      ...res,
    };
  }

  public load(obj: INodeModel): SimpleContainerNode {
    super.load(obj);
    this.tag = NodePropsSavingHelper.get(obj.tag, __defaults.tag) as string;
    return this;
  }
}

const __defaults = {
  tag: 'div',
};

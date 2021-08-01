import ISavable from 'logic/model/ISavable';
import NodePropsSavingHelper from 'logic/model/NodePropsSavingHelper';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import NodeBase from 'logic/model/page/NodeBase';
import INodeModel from 'model/INodeModel';

export default class ButtonNode
  extends NodeBase
  implements ISavable<ButtonNode>
{
  public text: string = __defaults.text;
  public action: string = __defaults.action;

  public constructor() {
    super('ButtonNodeComponent', NodeTypeEnum.ButtonNodeType);
  }

  public get defaultName(): string {
    return 'Button';
  }

  public save(): INodeModel {
    const res = super.save();
    return {
      text: NodePropsSavingHelper.save(this.text, __defaults.text),
      action: NodePropsSavingHelper.save(this.action, __defaults.action),
      ...res,
    };
  }

  public load(obj: INodeModel): ButtonNode {
    super.load(obj);
    this.text = NodePropsSavingHelper.get(obj.text, __defaults.text) as string;
    this.action = NodePropsSavingHelper.get(
      obj.action,
      __defaults.action
    ) as string;
    return this;
  }
}

const __defaults = {
  text: 'button',
  action: '#',
};

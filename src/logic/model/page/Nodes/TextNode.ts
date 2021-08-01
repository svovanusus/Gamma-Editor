import ISavable from 'logic/model/ISavable';
import NodePropsSavingHelper from 'logic/model/NodePropsSavingHelper';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import NodeBase from 'logic/model/page/NodeBase';
import INodeModel from 'model/INodeModel';

export default class TextNode extends NodeBase implements ISavable<TextNode> {
  public text: string = __defaults.text;

  public constructor() {
    super('TextNodeComponent', NodeTypeEnum.TextNodeType);
  }

  public get defaultName(): string {
    return 'Text';
  }

  public save(): INodeModel {
    const res = super.save();
    return {
      text: NodePropsSavingHelper.save(this.text, __defaults.text),
      ...res,
    };
  }

  public load(obj: INodeModel): TextNode {
    super.load(obj);
    this.text = NodePropsSavingHelper.get(obj.text, __defaults.text) as string;
    return this;
  }
}

const __defaults = {
  text: 'Lorem ipsim...',
};

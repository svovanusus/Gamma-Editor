import ISavable from 'logic/model/ISavable';
import NodePropsSavingHelper from 'logic/model/NodePropsSavingHelper';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import NodeBase from 'logic/model/page/NodeBase';
import INodeModel from 'model/INodeModel';
import CssMeasure, { SavedCssMeasure } from '../settings/CssMeasure';
import CssMeasureType from '../settings/CssMeasureType';
import FontWeightType from '../settings/FontWeightType';

export default class TextNode extends NodeBase implements ISavable<TextNode> {
  public text: string = __defaults.text;
  public color: string = __defaults.color;
  public fontSize: CssMeasure = __defaults.fontSize.clone();
  public fontWeight: FontWeightType = __defaults.fontWeight;

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
      color: NodePropsSavingHelper.save(this.color, __defaults.color),
      fontSize: NodePropsSavingHelper.save(this.fontSize.save(), __defaults.fontSize.save()),
      fontWeight: NodePropsSavingHelper.save(this.fontWeight, __defaults.fontWeight),
      ...res,
    };
  }

  public load(obj: INodeModel): TextNode {
    super.load(obj);
    this.text = NodePropsSavingHelper.get(obj.text, __defaults.text) as string;
    this.color = NodePropsSavingHelper.get(obj.color, __defaults.color) as string;
    this.fontSize = obj.fontSize ? new CssMeasure().load(obj.fontSize as SavedCssMeasure) : __defaults.fontSize.clone();
    this.fontWeight = NodePropsSavingHelper.get(obj.fontWeight, __defaults.fontWeight) as FontWeightType;
    return this;
  }
}

const __defaults = {
  text: 'Lorem ipsim...',
  color: '#000000',
  fontSize: new CssMeasure().load({ value: 14, measureType: CssMeasureType.Pt }),
  fontWeight: FontWeightType.Normal,
};

import ISavable from 'logic/model/ISavable';
import NodePropsSavingHelper from 'logic/model/NodePropsSavingHelper';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import ContainerNodeBase from 'logic/model/page/ContainerNodeBase';
import INodeModel from 'model/INodeModel';
import ContainerTagType from '../ContainerTagType';
import CssMeasure, { SavedCssMeasure } from '../settings/CssMeasure';
import CssMeasureType from '../settings/CssMeasureType';

export default class SimpleContainerNode
  extends ContainerNodeBase
  implements ISavable<SimpleContainerNode>
{
  public tag: ContainerTagType = __defaults.tag;
  public useFixedWidth: boolean = __defaults.useFixedWidth;
  public useFixedHeight: boolean = __defaults.useFixedHeight;
  public width: CssMeasure = __defaults.width.clone();
  public height: CssMeasure = __defaults.height.clone();

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
      useFixedWidth: NodePropsSavingHelper.save(this.useFixedWidth, __defaults.useFixedWidth),
      useFixedHeight: NodePropsSavingHelper.save(this.useFixedHeight, __defaults.useFixedHeight),
      width: NodePropsSavingHelper.save(this.width.save(), __defaults.width.save()),
      height: NodePropsSavingHelper.save(this.height.save(), __defaults.height.save()),
      ...res,
    };
  }

  public load(obj: INodeModel): SimpleContainerNode {
    super.load(obj);
    this.tag = NodePropsSavingHelper.get(obj.tag, __defaults.tag) as ContainerTagType;
    this.useFixedWidth = NodePropsSavingHelper.get(obj.useFixedWidth, __defaults.useFixedWidth) as boolean;
    this.useFixedHeight = NodePropsSavingHelper.get(obj.useFixedHeight, __defaults.useFixedHeight) as boolean;
    this.width = obj.width ? new CssMeasure().load(obj.width as SavedCssMeasure) : __defaults.width.clone();
    this.height = obj.height ? new CssMeasure().load(obj.height as SavedCssMeasure) : __defaults.height.clone();
    return this;
  }
}

const __defaults = {
  tag: ContainerTagType.Div,
  useFixedWidth: false,
  useFixedHeight: false,
  width: new CssMeasure().load({ value: 500, measureType: CssMeasureType.Px }),
  height: new CssMeasure().load({ value: 250, measureType: CssMeasureType.Px }),
};

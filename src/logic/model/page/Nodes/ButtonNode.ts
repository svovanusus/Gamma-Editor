import ISavable from 'logic/model/ISavable';
import NodePropsSavingHelper from 'logic/model/NodePropsSavingHelper';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import NodeBase from 'logic/model/page/NodeBase';
import INodeModel from 'model/INodeModel';
import ButtonActionTypeEnum from '../settings/ButtonActionTypeEnum';
import ButtonLinkTypeEnum from '../settings/ButtonLinkTypeEnum';
import HorizontalAlignType from '../settings/HorizontalAlignType';

export default class ButtonNode
  extends NodeBase
  implements ISavable<ButtonNode, SavedButtonNode>
{
  public text: string = __defaults.text;
  public title: string = __defaults.title;
  public align: HorizontalAlignType = __defaults.align;
  public actionType: ButtonActionTypeEnum = __defaults.actionType;
  public linkType: ButtonLinkTypeEnum = __defaults.linkType;
  public linkText: string = __defaults.linkText;
  public anchorName: string = __defaults.anchorName;
  public pageId: string = __defaults.pageId;
  public graphEventName: string = __defaults.graphEventName;
  public actionScript: string = __defaults.actionScript;

  public constructor() {
    super('ButtonNodeComponent', NodeTypeEnum.ButtonNodeType);
  }

  public get defaultName(): string {
    return 'Button';
  }

  public save(): SavedButtonNode {
    const res = super.save();
    return {
      text: NodePropsSavingHelper.save(this.text, __defaults.text),
      title: NodePropsSavingHelper.save(this.title, __defaults.title),
      align: NodePropsSavingHelper.save(this.align, __defaults.align),
      actionType: NodePropsSavingHelper.save(this.actionType, __defaults.actionType),
      linkType: NodePropsSavingHelper.save(this.linkType, __defaults.linkType),
      linkText: NodePropsSavingHelper.save(this.linkText, __defaults.linkText),
      anchorName: NodePropsSavingHelper.save(this.anchorName, __defaults.anchorName),
      pageId: NodePropsSavingHelper.save(this.pageId, __defaults.pageId),
      graphEventName: NodePropsSavingHelper.save(this.graphEventName, __defaults.graphEventName),
      actionScript: NodePropsSavingHelper.save(this.actionScript, __defaults.actionScript),
      ...res,
    };
  }

  public load(obj: SavedButtonNode): ButtonNode {
    super.load(obj);
    this.text = NodePropsSavingHelper.get(obj.text, __defaults.text);
    this.title = NodePropsSavingHelper.get(obj.title, __defaults.title);
    this.align = NodePropsSavingHelper.get(obj.align, __defaults.align) as HorizontalAlignType;
    this.actionType = NodePropsSavingHelper.get(obj.actionType, __defaults.actionType);
    this.linkType = NodePropsSavingHelper.get(obj.linkType, __defaults.linkType);
    this.linkText = NodePropsSavingHelper.get(obj.linkText, __defaults.linkText);
    this.anchorName = NodePropsSavingHelper.get(obj.anchorName, __defaults.anchorName);
    this.pageId = NodePropsSavingHelper.get(obj.pageId, __defaults.pageId);
    this.graphEventName = NodePropsSavingHelper.get(obj.graphEventName, __defaults.graphEventName);
    this.actionScript = NodePropsSavingHelper.get(obj.actionScript, __defaults.actionScript);
    return this;
  }
}

interface SavedButtonNode extends INodeModel {
  text: string;
  title: string;
  actionType: ButtonActionTypeEnum;
  linkType: ButtonLinkTypeEnum;
  linkText: string;
  anchorName: string;
  pageId: string;
  graphEventName: string;
  actionScript: string;
}

const __defaults = {
  text: 'Button',
  title: '',
  align: HorizontalAlignType.Default,
  actionType: ButtonActionTypeEnum.Nothing,
  linkType: ButtonLinkTypeEnum.SitePage,
  linkText: '#',
  anchorName: '',
  pageId: null,
  graphEventName: 'button-click',
  actionScript: '',
};

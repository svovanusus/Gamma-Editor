import NodeTypeEnum from 'logic/model/NodeTypeEnum';

export default class AddNodeButton {
  public readonly nodeType: NodeTypeEnum;
  public readonly title: string;
  public readonly description: string;
  public readonly icon: string;

  public constructor(nodeType: NodeTypeEnum, title: string, description: string, icon: string) {
    this.nodeType = nodeType;
    this.title = title;
    this.description = description;
    this.icon = icon;
  }
}

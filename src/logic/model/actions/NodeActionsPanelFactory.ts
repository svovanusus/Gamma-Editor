import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import NodeActionsPanelCreator from 'logic/model/actions/NodeActionsPanelCreator';
import EmptyNodeActionsPanelCreator from 'logic/model/actions/panel-creators/EmptyNodeActionsPanelCreator';
import TextNodeActionsPanelCreator from 'logic/model/actions/panel-creators/TextNodeActionsPanelCreator';
import NodeActionsPanel from 'logic/model/actions/NodeActionsPanel';
import NodeBase from 'logic/model/page/NodeBase';
import ButtonNodeActionsPanelCreator from 'logic/model/actions/panel-creators/ButtonNodeActionsPanelCreator';
import SimpleContainerNodeActionsPanelCreator from 'logic/model/actions/panel-creators/SimpleContainerNodeActionsPanelCreator';
import ColumnsContainerNodeActionsPanelCreator from 'logic/model/actions/panel-creators/ColumnsContainerNodeActionsPanelCreator';
import ImageNodeActionsPanelCreator from 'logic/model/actions/panel-creators/ImageNodeActionsPanelCreator';

export default class NodeActionsPanelFactory {
  private static _instance: NodeActionsPanelFactory = null;

  private readonly nodeActionsPanelTable: {
    [nodeType: number]: NodeActionsPanelCreator<any>;
  } = {};

  private constructor() {
    this.nodeActionsPanelTable[NodeTypeEnum.PageDocumentNodeType] =
      new EmptyNodeActionsPanelCreator();

    this.nodeActionsPanelTable[NodeTypeEnum.TextNodeType] =
      new TextNodeActionsPanelCreator();

    this.nodeActionsPanelTable[NodeTypeEnum.ButtonNodeType] =
      new ButtonNodeActionsPanelCreator();

    this.nodeActionsPanelTable[NodeTypeEnum.SimpleContainerNodeType] =
      new SimpleContainerNodeActionsPanelCreator();

    this.nodeActionsPanelTable[NodeTypeEnum.ColumnsContainerNodeType] =
      new ColumnsContainerNodeActionsPanelCreator();

    this.nodeActionsPanelTable[NodeTypeEnum.ImageNodeType] =
      new ImageNodeActionsPanelCreator();
  }

  public static getInstance(): NodeActionsPanelFactory {
    if (!this._instance) this._instance = new NodeActionsPanelFactory();
    return this._instance;
  }

  public getPanel(node: NodeBase): NodeActionsPanel {
    if (!node) return null;

    const creator = this.nodeActionsPanelTable[node.type];
    return creator?.createPanel(node);
  }
}

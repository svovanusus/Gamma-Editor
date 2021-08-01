import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import SimpleContainerNode from 'logic/model/page/Containers/SimpleContainerNode';
import NodeBase from 'logic/model/page/NodeBase';
import ButtonNode from 'logic/model/page/Nodes/ButtonNode';
import TextNode from 'logic/model/page/Nodes/TextNode';
import PageDocument from 'logic/model/page/PageDocument';
import INodeFactory from 'logic/model/INodeFactory';
import IContainerNode from 'logic/model/page/IContainerNode';
import ColumnsContainerNode from 'logic/model/page/Containers/ColumnsContainerNode';

interface NodeConstructor {
  new (): NodeBase;
}

export default class NodeFactory implements INodeFactory {
  private static _instance: NodeFactory | null = null;

  private _nodeMapTable: { [nodeType: number]: NodeConstructor } = {};

  private constructor() {
    this._nodeMapTable[NodeTypeEnum.PageDocumentNodeType] = PageDocument;
    this._nodeMapTable[NodeTypeEnum.TextNodeType] = TextNode;
    this._nodeMapTable[NodeTypeEnum.ButtonNodeType] = ButtonNode;
    this._nodeMapTable[NodeTypeEnum.SimpleContainerNodeType] = SimpleContainerNode;
    this._nodeMapTable[NodeTypeEnum.ColumnsContainerNodeType] = ColumnsContainerNode;
  }

  public static getInstance(): NodeFactory {
    if (!NodeFactory._instance) NodeFactory._instance = new NodeFactory();
    return NodeFactory._instance;
  }

  public createNodeByType<T extends NodeBase>(type: NodeTypeEnum, parent: IContainerNode = null): T {
    const constructor = this._nodeMapTable[type];

    if (constructor) {
      const node = new constructor() as T;
      node.parent = parent;
      return node;
    }

    return null;
  }
}
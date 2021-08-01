import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import NodeBase from 'logic/model/page/NodeBase';
import IContainerNode from 'logic/model/page/IContainerNode';

export default interface INodeFactory {
  createNodeByType<T extends NodeBase>(type: NodeTypeEnum, parent?: IContainerNode): T;
}
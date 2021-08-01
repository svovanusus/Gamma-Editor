import INode from 'logic/model/page/INode';

export default interface IContainerNode extends INode {
  children: INode[];
}

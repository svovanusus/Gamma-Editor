import INode from 'logic/model/page/INode';
import IPageDocument from './IPageDocument';

export default interface IContainerNode extends INode {
  document: IPageDocument;
  children: INode[];
}

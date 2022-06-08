import IContainerNode from 'logic/model/page/IContainerNode';
import CssStylesheet from 'logic/model/style/CssStylesheet';

export default interface IPageDocument extends IContainerNode {
  title: string;
  graphModel: string;
  stylesheet: CssStylesheet;
  // TODO: Additional page fields
}

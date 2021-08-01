import NodeActionsPanel from 'logic/model/actions/NodeActionsPanel';
import NodeBase from 'logic/model/page/NodeBase';

export default abstract class NodeActionsPanelCreator<TNode extends NodeBase> {
  public abstract createPanel(node: TNode): NodeActionsPanel;
}

import NodeActionsPanelCreator from 'logic/model/actions/NodeActionsPanelCreator';
import NodeBase from 'logic/model/page/NodeBase';
import NodeActionsPanel from 'logic/model/actions/NodeActionsPanel';

export default class EmptyNodeActionsPanelCreator extends NodeActionsPanelCreator<NodeBase> {
  public createPanel(node: NodeBase) {
    return NodeActionsPanel.create();
  }
}

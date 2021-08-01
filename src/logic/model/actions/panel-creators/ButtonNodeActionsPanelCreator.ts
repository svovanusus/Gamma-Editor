import NodeActionsPanelCreator from 'logic/model/actions/NodeActionsPanelCreator';
import DeleteNodeAction from 'logic/model/actions/node-actions/DeleteNodeAction';
import NodeActionsPanel from 'logic/model/actions/NodeActionsPanel';
import ButtonNode from 'logic/model/page/Nodes/ButtonNode';

export default class ButtonNodeActionsPanelCreator extends NodeActionsPanelCreator<ButtonNode> {
  public createPanel(node: ButtonNode) {
    return NodeActionsPanel.create()
      .add(new DeleteNodeAction(node));
  }
}

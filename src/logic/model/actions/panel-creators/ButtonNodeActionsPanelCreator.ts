import NodeActionsPanelCreator from 'logic/model/actions/NodeActionsPanelCreator';
import DeleteNodeAction from 'logic/model/actions/node-actions/DeleteNodeAction';
import NodeActionsPanel from 'logic/model/actions/NodeActionsPanel';
import ButtonNode from 'logic/model/page/Nodes/ButtonNode';
import GoToParentNodeAction from '../node-actions/GoToParentNodeAction';
import LabelNodeAction from '../node-actions/LabelNodeAction';

export default class ButtonNodeActionsPanelCreator extends NodeActionsPanelCreator<ButtonNode> {
  public createPanel(node: ButtonNode) {
    return NodeActionsPanel.create()
      .add(new LabelNodeAction(node))
      .add(new DeleteNodeAction(node))
      .add(new GoToParentNodeAction(node));
  }
}

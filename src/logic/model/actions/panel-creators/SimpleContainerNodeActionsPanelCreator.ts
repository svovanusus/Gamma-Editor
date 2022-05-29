import NodeActionsPanelCreator from 'logic/model/actions/NodeActionsPanelCreator';
import DeleteNodeAction from 'logic/model/actions/node-actions/DeleteNodeAction';
import NodeActionsPanel from 'logic/model/actions/NodeActionsPanel';
import SimpleContainerNode from 'logic/model/page/Containers/SimpleContainerNode';
import GoToParentNodeAction from '../node-actions/GoToParentNodeAction';
import AddNodeAction from '../node-actions/AddNodeAction';
import LabelNodeAction from '../node-actions/LabelNodeAction';

export default class SimpleContainerNodeActionsPanelCreator extends NodeActionsPanelCreator<SimpleContainerNode> {
  public createPanel(node: SimpleContainerNode) {
    return NodeActionsPanel.create()
      .add(new LabelNodeAction(node))
      .add(new AddNodeAction(node))
      .add(new DeleteNodeAction(node))
      .add(new GoToParentNodeAction(node));
  }
}

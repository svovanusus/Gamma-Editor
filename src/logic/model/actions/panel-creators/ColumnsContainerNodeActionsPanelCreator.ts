import ColumnsContainerNode from 'logic/model/page/Containers/ColumnsContainerNode';
import NodeActionsPanelCreator from 'logic/model/actions/NodeActionsPanelCreator';
import NodeActionsPanel from 'logic/model/actions/NodeActionsPanel';
import DeleteNodeAction from 'logic/model/actions/node-actions/DeleteNodeAction';
import GoToParentNodeAction from '../node-actions/GoToParentNodeAction';
import AddNodeAction from '../node-actions/AddNodeAction';
import LabelNodeAction from '../node-actions/LabelNodeAction';

export default class SimpleContainerNodeActionsPanelCreator extends NodeActionsPanelCreator<ColumnsContainerNode> {
  public createPanel(node: ColumnsContainerNode): NodeActionsPanel {
    return NodeActionsPanel.create()
      .add(new LabelNodeAction(node))
      .add(new AddNodeAction(node))
      .add(new DeleteNodeAction(node))
      .add(new GoToParentNodeAction(node));
  }
}
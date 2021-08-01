import ColumnsContainerNode from 'logic/model/page/Containers/ColumnsContainerNode';
import NodeActionsPanelCreator from 'logic/model/actions/NodeActionsPanelCreator';
import NodeActionsPanel from 'logic/model/actions/NodeActionsPanel';
import DeleteNodeAction from 'logic/model/actions/node-actions/DeleteNodeAction';

export default class SimpleContainerNodeActionsPanelCreator extends NodeActionsPanelCreator<ColumnsContainerNode> {
  public createPanel(node: ColumnsContainerNode): NodeActionsPanel {
    return NodeActionsPanel.create()
      .add(new DeleteNodeAction(node));
  }
}
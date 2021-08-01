import NodeActionsPanelCreator from 'logic/model/actions/NodeActionsPanelCreator';
import DeleteNodeAction from 'logic/model/actions/node-actions/DeleteNodeAction';
import NodeActionsPanel from 'logic/model/actions/NodeActionsPanel';
import SimpleContainerNode from 'logic/model/page/Containers/SimpleContainerNode';

export default class SimpleContainerNodeActionsPanelCreator extends NodeActionsPanelCreator<SimpleContainerNode> {
  public createPanel(node: SimpleContainerNode) {
    return NodeActionsPanel.create()
      .add(new DeleteNodeAction(node));
  }
}

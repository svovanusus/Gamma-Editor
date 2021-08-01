import NodeActionsPanelCreator from 'logic/model/actions/NodeActionsPanelCreator';
import TextNode from 'logic/model/page/Nodes/TextNode';
import DeleteNodeAction from 'logic/model/actions/node-actions/DeleteNodeAction';
import NodeActionsPanel from 'logic/model/actions/NodeActionsPanel';

export default class TextNodeActionsPanelCreator extends NodeActionsPanelCreator<TextNode> {
  public createPanel(node: TextNode) {
    return NodeActionsPanel.create()
      .add(new DeleteNodeAction(node));
  }
}

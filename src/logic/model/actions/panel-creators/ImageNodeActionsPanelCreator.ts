import ImageNode from 'logic/model/page/Nodes/ImageNode';
import NodeActionsPanel from 'logic/model/actions/NodeActionsPanel';
import NodeActionsPanelCreator from 'logic/model/actions/NodeActionsPanelCreator';
import DeleteNodeAction from 'logic/model/actions/node-actions/DeleteNodeAction';
import GoToParentNodeAction from '../node-actions/GoToParentNodeAction';
import LabelNodeAction from '../node-actions/LabelNodeAction';
import SelectResourceNodeAction from '../node-actions/SelectResourceNodeAction';

export default class ImageNodeActionsPanelCreator extends NodeActionsPanelCreator<ImageNode> {
  public createPanel(node: ImageNode): NodeActionsPanel {
    return NodeActionsPanel.create()
      .add(new LabelNodeAction(node))
      .add(new SelectResourceNodeAction(node, 'resourceUid'))
      .add(new DeleteNodeAction(node))
      .add(new GoToParentNodeAction(node));
  }
}
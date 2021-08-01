import NodeComponentBase from 'components/page/NodeComponentBase';
import ContainerNodeBase from 'logic/model/page/ContainerNodeBase';
import NodeBase from 'logic/model/page/NodeBase';
import { StoreTypes } from 'store';

export default class NodeContainerComponentBase<TNode extends ContainerNodeBase> extends NodeComponentBase<TNode> {
  public childrenClick(node: NodeBase) {
    this.$store.dispatch(StoreTypes.actions.SELECT_NODE, { node });
  }

  public placeholderClick() {
    this.$store.dispatch(StoreTypes.actions.SELECT_NODE, { node: this.model });
  }
}
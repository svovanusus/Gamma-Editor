import NodeBase from 'logic/model/page/NodeBase';
import NodeActionButtonBase from 'logic/model/actions/node-actions/NodeActionButtonBase';
import store, { StoreTypes } from 'store';

export default class GoToParentNodeAction extends NodeActionButtonBase {
  public constructor(node: NodeBase) {
    super(node);
  }

  public get name(): string {
    return 'go-to-parent-node-action';
  }

  public get icon(): string {
    return 'mdi-chevron-double-up';
  }

  public action(): void {
    if (this.node.parent) {
      store.dispatch(StoreTypes.actions.SELECT_NODE, { node: this.node.parent, isPropsOpen: false });
    }
  }
}
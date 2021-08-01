import NodeActionButtonBase from 'logic/model/actions/node-actions/NodeActionButtonBase';
import NodeBase from 'logic/model/page/NodeBase';

export default class DeleteNodeAction extends NodeActionButtonBase {
  public constructor(node: NodeBase) {
    super(node);
  }

  public get name(): string {
    return 'delete-node-action';
  }

  public get icon(): string {
    return 'mdi-delete';
  }

  public action() {
    const parent = this.node.parent;
    if (!parent) return;
    parent.children = parent.children.filter(x => x.id !== this.node.id);
  };
}
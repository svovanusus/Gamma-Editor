import NodeActionBase from 'logic/model/actions/node-actions/NodeActionBase';
import NodeBase from 'logic/model/page/NodeBase';

export default abstract class NodeActionButtonBase extends NodeActionBase {
  protected constructor(node: NodeBase) {
    super('NodeActionButtonComponent', node);
  }

  public abstract get icon(): string;

  public abstract action(): void;
}
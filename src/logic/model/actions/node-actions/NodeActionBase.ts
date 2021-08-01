import NodeBase from 'logic/model/page/NodeBase';

export default abstract class NodeActionBase {
  public readonly component: string;
  public readonly node: NodeBase;

  protected constructor(component: string, node: NodeBase) {
    this.component = component;
    this.node = node;
  }

  public abstract get name(): string;
}

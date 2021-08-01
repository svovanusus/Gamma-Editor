import NodeActionBase from 'logic/model/actions/node-actions/NodeActionBase';

export default class NodeActionsPanel {
  public readonly actions: NodeActionBase[] = [];

  private constructor() {}

  public add(action: NodeActionBase): NodeActionsPanel {
    this.actions.push(action);
    return this;
  }

  public static create(): NodeActionsPanel {
    return new NodeActionsPanel();
  }
}
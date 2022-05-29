import NodeBase from 'logic/model/page/NodeBase';
import NodeActionBase from 'logic/model/actions/node-actions/NodeActionBase';

export default class SelectResourceNodeAction<TNode extends NodeBase> extends NodeActionBase {
  public readonly fieldName: keyof TNode;

  public constructor(node: TNode, fieldName: keyof TNode) {
    super('SelectResourceNodeActionComponent', node);
    this.fieldName = fieldName;
  }

  public get name(): string {
    return 'select-resource-node-action';
  }
}
import NodeActionBase from 'logic/model/actions/node-actions/NodeActionBase';
import NodeBase from 'logic/model/page/NodeBase';

export default class LabelNodeAction extends NodeActionBase {
  public constructor(node: NodeBase) {
    super('LabelNodeActionComponent', node);
  }

  public get name(): string {
    return 'label-node-action';
  }
}
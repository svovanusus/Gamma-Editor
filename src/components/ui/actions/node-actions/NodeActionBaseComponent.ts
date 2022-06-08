import NodeActionBase from 'logic/model/actions/node-actions/NodeActionBase';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class NodeActionBaseComponent<TNodeAction extends NodeActionBase> extends Vue {
  @Prop({ required: true }) public readonly action!: TNodeAction;
}
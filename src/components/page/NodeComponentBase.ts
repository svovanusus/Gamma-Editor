import NodeBase from 'logic/model/page/NodeBase';
import { Vue, Prop } from 'vue-property-decorator';

export default class NodeComponentBase<TNode extends NodeBase> extends Vue {
  @Prop({ required: true }) public readonly model!: TNode;
}

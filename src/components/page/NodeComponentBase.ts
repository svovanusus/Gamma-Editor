import NodeBase from 'logic/model/page/NodeBase';
import CssStylesheet from 'logic/model/style/CssStylesheet';
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class NodeComponentBase<TNode extends NodeBase> extends Vue {
  @Prop({ required: true }) public readonly model!: TNode;

  public created(): void {
    this.updateStylesBase();
  }

  @Watch('model.id')
  protected updateStylesBase(): void {
    if (!this.model) return;

    const stylesheet = this.model.document.stylesheet;
    stylesheet.cleanRulesForNode(this.model.id);

    this.applyStyles(stylesheet);
  }

  protected applyNodeStylesBase(stylesheet: CssStylesheet): void {}

  protected applyStyles(stylesheet: CssStylesheet): void {
    this.applyNodeStylesBase(stylesheet);
  }
}

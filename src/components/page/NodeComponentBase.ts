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
  @Watch('model.margins', { deep: true })
  @Watch('model.paddings', { deep: true })
  protected updateStylesBase(): void {
    if (!this.model) return;

    const stylesheet = this.model.document.stylesheet;
    stylesheet.cleanRulesForNode(this.model.id);

    this.applyStyles(stylesheet);
  }

  protected applyNodeStylesBase(stylesheet: CssStylesheet): void {
    stylesheet.forRule({ id: this.model.id })
      .setProperty('margin-top', this.model.margins.top.toString())
      .setProperty('margin-bottom', this.model.margins.bottom.toString())
      .setProperty('margin-left', this.model.margins.left.toString())
      .setProperty('margin-right', this.model.margins.right.toString())
      .setProperty('padding-top', this.model.paddings.top.toString())
      .setProperty('padding-bottom', this.model.paddings.bottom.toString())
      .setProperty('padding-left', this.model.paddings.left.toString())
      .setProperty('padding-right', this.model.paddings.right.toString())
  }

  protected applyStyles(stylesheet: CssStylesheet): void {
    this.applyNodeStylesBase(stylesheet);
  }
}

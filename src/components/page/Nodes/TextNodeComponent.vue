<template>
  <component-wrapper :node="model" :componentId="model.id">
    <p v-html="model.text" />
  </component-wrapper>
</template>

<script lang="ts">
import { Component, Watch } from 'vue-property-decorator';

import ComponentWrapper from 'components/page/ComponentWrapper.vue';
import NodeComponentBase from 'components/page/NodeComponentBase';
import TextNode from 'logic/model/page/Nodes/TextNode';
import CssStylesheet from 'logic/model/style/CssStylesheet';

@Component({
  name: 'TextNodeComponent',
  components: { ComponentWrapper },
})
export default class TextNodeComponent extends NodeComponentBase<TextNode> {
  @Watch('model.color')
  @Watch('model.fontSize', { deep: true })
  @Watch('model.fontWeight')
  public updateStyles(): void {
    this.updateStylesBase();
  }

  public applyStyles(stylesheet: CssStylesheet): void {
    this.applyNodeStylesBase(stylesheet);

    stylesheet.forRule({ id: this.model.id })
      .setProperty('font-size', this.model.fontSize.toString())
      .setProperty('font-weight', this.model.fontWeight)
      .setProperty('color', this.model.color);
  }
}
</script>

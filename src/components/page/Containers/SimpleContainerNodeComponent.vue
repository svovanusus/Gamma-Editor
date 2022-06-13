<template>
  <component-wrapper :node="model" :componentId="model.id" :isChildrenHover="isChildHover">
    <component :is="model.tag" class="container">
      <template v-if="model.children.length">
        <component
          :is="child.componentName"
          v-for="(child, index) in model.children"
          :key="`${model.name}-child-${index}`"
          v-bind="{ model: child }"
          @mouseenter.native="isChildHover = true"
          @mouseleave.native="isChildHover = false"
        />
      </template>
      <div v-else class="node-placeholder" @click.prevent.stop="() => placeholderClick()">Empty Container</div>
    </component>
  </component-wrapper>
</template>

<script lang="ts">
import { Component, Watch } from 'vue-property-decorator';

import ComponentWrapper from 'components/page/ComponentWrapper.vue';
import NodeContainerComponentBase from 'components/page/NodeContainerComponentBase';
import SimpleContainerNode from 'logic/model/page/Containers/SimpleContainerNode';
import CssStylesheet from 'logic/model/style/CssStylesheet';

@Component({
  name: 'SimpleContainerNodeComponent',
  components: { ComponentWrapper },
})
export default class SimpleContainerNodeComponent extends NodeContainerComponentBase<SimpleContainerNode> {
  public isChildHover: boolean = false;

  @Watch('model.useFixedWidth')
  @Watch('model.useFixedHeight')
  @Watch('model.width', { deep: true })
  @Watch('model.height', { deep: true })
  public updateStyles(): void {
    this.updateContainerStylesBase();
  }

  public applyStyles(stylesheet: CssStylesheet): void {
    this.applyContainerNodeStylesBase(stylesheet);
    const rule = stylesheet.forRule({ id: this.model.id });

    if (this.model.useFixedWidth) {
      rule.setProperty('width', this.model.width.toString());

      if (this.model.margins.left.toString() === this.model.margins.right.toString()) {
        rule.setProperty('margin-left', 'auto')
            .setProperty('margin-right', 'auto');
      }
    }

    if (this.model.useFixedHeight) {
      rule.setProperty('height', this.model.height.toString());
    }
  }
}
</script>

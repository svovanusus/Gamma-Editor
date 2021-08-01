<template>
  <component-wrapper :componentId="model.id" :isChildrenHover="isChildHover">
    <component :is="model.tag" class="container">
      <template v-if="model.children.length">
        <component
          :is="child.componentName"
          v-for="(child, index) in model.children"
          :key="`${model.name}-child-${index}`"
          v-bind="{ model: child }"
          @click.native.prevent.stop="childrenClick(child)"
          @mouseenter.native="isChildHover = true"
          @mouseleave.native="isChildHover = false"
        />
      </template>
      <div v-else class="node-placeholder" @click.prevent.stop="() => placeholderClick()">Empty Container</div>
    </component>
  </component-wrapper>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import ComponentWrapper from 'components/page/ComponentWrapper.vue';
import NodeContainerComponentBase from 'components/page/NodeContainerComponentBase';
import SimpleContainerNode from 'logic/model/page/Containers/SimpleContainerNode';

@Component({
  name: 'SimpleContainerNodeComponent',
  components: { ComponentWrapper },
})
export default class SimpleContainerNodeComponent extends NodeContainerComponentBase<SimpleContainerNode> {
  public isChildHover: boolean = false;
}
</script>

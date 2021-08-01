<template>
  <component-wrapper :componentId="model.id" :isChildrenHover="isChildHover">
    <div class="columns" :style="styles">
      <template v-if="model.children.length">
        <component
          :is="child.componentName"
          v-for="child in model.children"
          :key="`column-${child.id}`"
          :model="child"
          @click.native.prevent.stop="childrenClick(child)"
          @mouseenter="isChildHover = true"
          @mouseleave="isChildHover = false"
        />
      </template>
      <div v-else class="node-placeholder" @click.prevent.stop="() => placeholderClick()">No columns yet</div>
    </div>
  </component-wrapper>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import NodeContainerComponentBase from 'components/page/NodeContainerComponentBase';
import ColumnsContainerNode from 'logic/model/page/Containers/ColumnsContainerNode';
import ComponentWrapper from 'components/page/ComponentWrapper.vue';

@Component({
  name: 'ColumnsContainerNodeComponent',
  components: { ComponentWrapper },
})
export default class ColumnsContainerNodeComponent extends NodeContainerComponentBase<ColumnsContainerNode> {
  public isChildHover: boolean = false;

  public get styles() {
    return {
      gap: Number(this.model.gap) ? `${this.model.gap}px` : 0,
    };
  }
}
</script>

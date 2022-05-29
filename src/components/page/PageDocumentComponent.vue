<template>
  <div class="page">
    <component-wrapper :node="model" :componentId="model.id" :isChildrenHover="isChildHover">
      <template v-if="model.children.length">
        <component
          :is="child.componentName"
          v-for="(child, index) in model.children"
          :key="`${model.name}-root-child-${index}`"
          v-bind="{ model: child }"
          @mouseenter.native="isChildHover = true"
          @mouseleave.native="isChildHover = false"
        />
      </template>
      <div v-else class="node-placeholder" @click.prevent.stop="() => placeholderClick()">Empty Page</div>
    </component-wrapper>
  </div>
</template>

<script lang="ts">
import 'assets/scss/style.scss';

import { Component } from 'vue-property-decorator';

import ComponentWrapper from 'components/page/ComponentWrapper.vue';
import NodeContainerComponentBase from 'components/page/NodeContainerComponentBase';
import PageDocument from 'logic/model/page/PageDocument';

@Component({
  name: 'PageDocumentComponent',
  components: { ComponentWrapper },
})
export default class PageDocumentComponent extends NodeContainerComponentBase<PageDocument> {
  public isChildHover: boolean = false;
}
</script>

<template>
  <component-wrapper :node="model" :componentId="model.id">
    <img :src="model.resourceUrl" :alt="model.combiledAltText" :title="model.title" />
  </component-wrapper>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import NodeComponentBase from 'components/page/NodeComponentBase';
import ImageNode from 'logic/model/page/Nodes/ImageNode';
import ComponentWrapper from 'components/page/ComponentWrapper.vue';

@Component({
  name: 'ImageNodeComponent',
  components: { ComponentWrapper },
})
export default class ImageNodeComponent extends NodeComponentBase<ImageNode> {}
</script>
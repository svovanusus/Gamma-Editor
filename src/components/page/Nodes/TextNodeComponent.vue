<template>
  <component-wrapper :componentId="model.id">
    <p>{{ model.text }}</p>
  </component-wrapper>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import ComponentWrapper from 'components/page/ComponentWrapper.vue';
import NodeComponentBase from 'components/page/NodeComponentBase';
import TextNode from 'logic/model/page/Nodes/TextNode';

@Component({
  name: 'TextNodeComponent',
  components: { ComponentWrapper },
})
export default class TextNodeComponent extends NodeComponentBase<TextNode> {}
</script>

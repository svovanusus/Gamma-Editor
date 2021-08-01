<template>
  <component-wrapper :componentId="model.id">
    <a :href="model.action" class="btn">{{ model.text }}</a>
  </component-wrapper>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import ComponentWrapper from 'components/page/ComponentWrapper.vue';
import NodeComponentBase from 'components/page/NodeComponentBase';
import ButtonNode from 'logic/model/page/Nodes/ButtonNode';

@Component({
  name: 'ButtonNodeComponent',
  components: { ComponentWrapper },
})
export default class ButtonNodeComponent extends NodeComponentBase<ButtonNode> {}
</script>

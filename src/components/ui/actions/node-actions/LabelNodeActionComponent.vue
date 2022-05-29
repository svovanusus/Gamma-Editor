<template>
  <v-toolbar-title v-text="action.node.name" class="label-node-action" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import NodeActionBaseComponent from 'components/ui/actions/node-actions/NodeActionBaseComponent';
import LabelNodeAction from 'logic/model/actions/node-actions/LabelNodeAction';

@Component({
  name: 'LabelNodeActionComponent',
  components: {},
})
export default class LabelNodeActionComponent extends NodeActionBaseComponent<LabelNodeAction> {}
</script>
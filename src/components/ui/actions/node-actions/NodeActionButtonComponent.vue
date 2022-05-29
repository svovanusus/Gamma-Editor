<template>
  <v-btn icon @click="action.action()">
    <v-icon>{{ action.icon }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import NodeActionBaseComponent from 'components/ui/actions/node-actions/NodeActionBaseComponent';
import NodeActionButtonBase from 'logic/model/actions/node-actions/NodeActionButtonBase';

@Component({
  name: 'NodeActionButtonComponent',
  components: {},
})
export default class NodeActionButtonComponent extends NodeActionBaseComponent<NodeActionButtonBase> {}
</script>

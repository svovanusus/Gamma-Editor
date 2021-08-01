<template>
  <v-btn icon @click="() => nodeAction.action()">
    <v-icon>{{ nodeAction.icon }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import NodeActionButtonBase from 'logic/model/actions/node-actions/NodeActionButtonBase';

@Component({
  name: 'NodeActionButtonComponent',
  components: {},
})
export default class NodeActionButtonComponent extends Vue {
  @Prop({ required: true }) public readonly nodeAction: NodeActionButtonBase;
}
</script>

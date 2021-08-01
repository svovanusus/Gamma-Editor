<template>
  <v-toolbar v-if="actions.length" dense absolute class="node-toolbar">
    <component
      :is="action.component"
      v-for="action in actionsPanel.actions"
      :key="action.name"
      :nodeAction="action"
    />
  </v-toolbar>
</template>

<script lang="ts">
import { StoreState, StoreTypes } from 'store';
import { Component, Vue } from 'vue-property-decorator';
import NodeActionsPanelFactory from 'logic/model/actions/NodeActionsPanelFactory';
import NodeActionsPanel from 'logic/model/actions/NodeActionsPanel';
import NodeActionBase from 'logic/model/actions/node-actions/NodeActionBase';

@Component({
  name: 'NodeActionsPanelComponent',
  components: {},
})
export default class NodeActionsPanelComponent extends Vue {
  public readonly state: StoreState = this.$store.state;

  public get actionsPanel(): NodeActionsPanel {
    return this.nodeActionsPanelFactory.getPanel(this.state.currentNode)
  }

  public get actions(): NodeActionBase[] {
    return this.actionsPanel?.actions ?? [];
  }

  private readonly nodeActionsPanelFactory = NodeActionsPanelFactory.getInstance();
}
</script>

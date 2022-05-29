<template>
  <v-container fluid>
    <v-row v-if="state.currentNode">
      <v-col cols="12">
        <v-toolbar-title>TEST</v-toolbar-title>
      </v-col>
      <v-col v-for="btn in buttons" :key="`add-node-${btn.nodeType.toString()}-btn`" cols="12">
        <v-sheet outlined rounded>
          <v-list-item href="#" @click="() => itemClick(btn.nodeType)">
            <v-list-item-icon>
              <v-icon>{{ btn.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ btn.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ btn.description }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" class="d-flex flex-column align-center">
        <v-icon class="pa-8">mdi-selection-off</v-icon>
        <p>Select the node first.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import NodeFactory from 'logic/model/NodeFactory';
import AddNodeButtonsFactory from 'logic/model/add-node/AddNodeButtonsFactory';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import ContainerNodeBase from 'logic/model/page/ContainerNodeBase';
import { StoreState, StoreTypes } from 'store';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'AddNodePanelComponent',
  components: {},
})
export default class AddNodePanelComponent extends Vue {
  public readonly state: StoreState = this.$store.state;

  public get buttons() {
    return this.addNodeButtonsFactory.addNodeButtons;
  }

  public itemClick(type: NodeTypeEnum) {
    const container = this.state.currentNode instanceof ContainerNodeBase
      ? this.state.currentNode
      : this.state.currentNode.parent;
    
    if (!container) return;

    const node = this.nodeFactory.createNodeByType(type, container);
    node.id = `0-${Math.random()}`;
    node.name = node.defaultName;
    container.children.push(node);

    this.$store.dispatch(StoreTypes.actions.SELECT_NODE, { node });
  }

  private readonly nodeFactory = NodeFactory.getInstance();
  private readonly addNodeButtonsFactory = AddNodeButtonsFactory.getInstance();
}
</script>

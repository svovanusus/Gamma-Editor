<template>
  <v-sheet v-if="state.currentNode">
    <add-nodes-section v-for="section in sections" :key="`section-${section.name}`" :title="section.name">
      <v-list-item v-for="btn in section.buttons" :key="`add-node-${btn.nodeType.toString()}-btn`" href="#" @click="() => itemClick(btn.nodeType)">
        <v-list-item-icon>
          <v-icon>{{ btn.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ btn.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ btn.description }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </add-nodes-section>
  </v-sheet>
  <no-selected-node-component v-else />
</template>

<script lang="ts">
import NodeFactory from 'logic/model/NodeFactory';
import AddNodeButtonsFactory from 'logic/model/add-node/AddNodeButtonsFactory';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import ContainerNodeBase from 'logic/model/page/ContainerNodeBase';
import { StoreState, StoreTypes } from 'store';
import { Component, Vue } from 'vue-property-decorator';
import NoSelectedNodeComponent from 'components/ui/drawer-tabs/NoSelectedNodeComponent.vue';
import AddNodesSection from 'components/ui/drawer-tabs/nodes/sections/AddNodesSection.vue';
import AddNodeButton from 'logic/model/add-node/AddNodeButton';

interface AddNodeButtonsSection {
  name: string;
  buttons: AddNodeButton[];
}

@Component({
  name: 'AddNodeComponent',
  components: {
    NoSelectedNodeComponent,
    AddNodesSection,
  },
})
export default class AddNodeComponent extends Vue {
  public readonly state: StoreState = this.$store.state;

  public get buttons(): AddNodeButton[] {
    return this.addNodeButtonsFactory.addNodeButtons;
  }

  public get sections(): AddNodeButtonsSection[] {
    const sectionsObj = this.buttons.reduce((res, cur) => {
      if (typeof res[cur.section] === 'undefined') res[cur.section] = [];
      res[cur.section].push(cur);
      return res;
    }, {});

    return Object.keys(sectionsObj).map(key => <AddNodeButtonsSection>{
      name: key,
      buttons: sectionsObj[key],
    });
  }

  public itemClick(type: NodeTypeEnum) {
    const container = this.state.currentNode instanceof ContainerNodeBase
      ? this.state.currentNode
      : this.state.currentNode.parent;
    
    if (!container) return;

    const node = this.nodeFactory.createNodeByType(type, container);
    node.name = node.defaultName;
    container.children.push(node);

    this.$store.dispatch(StoreTypes.actions.SELECT_NODE, { node });
  }

  private readonly nodeFactory = NodeFactory.getInstance();
  private readonly addNodeButtonsFactory = AddNodeButtonsFactory.getInstance();
}
</script>

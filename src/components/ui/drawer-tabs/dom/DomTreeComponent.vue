<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-treeview :active.sync="active" :items="[state.currentDocument]" activatable open-all dense transition />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { StoreState, StoreTypes } from 'store';
import NodeBase from 'logic/model/page/NodeBase';
import ContainerNodeBase from 'logic/model/page/ContainerNodeBase';

@Component({
  name: 'DomTreeComponent',
  components: {},
})
export default class DomTreeComponent extends Vue {
  public readonly state: StoreState = this.$store.state;

  public get active(): string[] {
    return [ this.state.currentNode?.id ].filter(x => !!x);
  }

  public set active(val: string[]) {
    var found = this.findFunc([this.state.currentDocument], val[0]);
    this.$store.dispatch(StoreTypes.actions.SELECT_NODE, { node: found, isPropsOpen: false });
  }

  private findFunc(nodes: NodeBase[], id: string): NodeBase | null {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id === id) return nodes[i];
      if (nodes[i] instanceof ContainerNodeBase) {
        const found = this.findFunc((nodes[i] as ContainerNodeBase).children, id);
        if (found) return found;
      }
    }
    return null;
  }
}
</script>

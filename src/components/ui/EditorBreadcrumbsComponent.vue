<template>
  <v-breadcrumbs large :items="items" class="pa-0">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item v-if="item.isHome">
        <v-icon class="py-1">mdi-home</v-icon>
      </v-breadcrumbs-item>
      <v-breadcrumbs-item
        v-else
        :href="item.href"
        @click.prevent.stop="() => itemClick(item.node)"
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script lang="ts">
import ContainerNodeBase from 'logic/model/page/ContainerNodeBase';
import NodeBase from 'logic/model/page/NodeBase';
import { StoreState, StoreTypes } from 'store';
import { Component, Vue, Watch } from 'vue-property-decorator';

interface BreadcrumbsItem {
  isHome: boolean;
  text: string;
  href: string;
  node: NodeBase;
}

@Component({
  name: 'EditorBreadcrumbsComponent',
  components: {},
})
export default class EditorBreadcrumbsComponent extends Vue {
  public readonly state: StoreState = this.$store.state;

  public get items(): BreadcrumbsItem[] {
    const res: BreadcrumbsItem[] = [];

    if (this.state.currentNode) {
      let current: NodeBase = this.state.currentNode;
      do {
        res.push({
          text: current.name,
          href: '#',
          node: current,
          isHome: false,
        });
        current = current.parent as ContainerNodeBase;
      } while(current);
    }

    res.push({
      isHome: true,
      text: '',
      href: '',
      node: null,
    });

    return res.reverse();
  }

  public itemClick(node: NodeBase): void {
    this.$store.dispatch(StoreTypes.actions.SELECT_NODE, { node });
  }

  @Watch('items')
  public itemsUpdate(): void {
    this.$emit('content-update');
  }
}
</script>

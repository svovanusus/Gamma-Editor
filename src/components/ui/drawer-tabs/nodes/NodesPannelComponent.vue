<template>
  <v-container fluid>
    <v-row class="nodes-pannel-row">
      <v-col cols="12" class="pa-0 nodes-pannel-col">
        <sections-view-component v-model="selectedSection" :sections="sections" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.nodes-pannel-row {
  min-height: calc(100vh - 48px);
}

.nodes-pannel-col {
  min-height: 100%;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { StoreState } from 'store';

import AddNodeComponent from 'components/ui/drawer-tabs/nodes/sections/AddNodeComponent.vue';
import DomTreeComponent from 'components/ui/drawer-tabs/nodes/sections/DomTreeComponent.vue';
import SectionsViewComponent from 'components/ui/drawer-tabs/SectionsViewComponent.vue';
import SectionDesc from 'components/ui/drawer-tabs/SectionDesc';

@Component({
  name: 'NodesPannelComponent',
  components: {
    SectionsViewComponent,
  },
})
export default class NodesPannelComponent extends Vue {
  public readonly state: StoreState = this.$store.state;

  public readonly sections: SectionDesc[];

  public get selectedSection(): SectionDesc | null {
    return this.sections.find(x => x.name === this.state.nodesPanelActiveSectionName) ?? null;
  }

  public set selectedSection(val: SectionDesc | null) {
    this.state.nodesPanelActiveSectionName = val?.name ?? null;
  }

  public constructor() {
    super();

    this.sections = [
      { name: 'add-node-section', title: 'Add Node', icon: 'mdi-view-grid-plus', component: AddNodeComponent },
      { name: 'dom-tree-section', title: 'Dom Tree', icon: 'mdi-file-tree', component: DomTreeComponent },
    ];
  }
}
</script>
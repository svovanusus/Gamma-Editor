<template>
  <v-container fluid>
    <v-row class="common-pannel-row">
      <v-col cols="12" class="pa-0 common-pannel-col">
        <sections-view-component v-model="selectedSection" :sections="sections" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.common-pannel-row {
  min-height: calc(100vh - 48px);
}

.common-pannel-col {
  min-height: 100%;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { StoreState } from 'store';

import SitePagesComponent from 'components/ui/drawer-tabs/common/sections/SitePagesComponent.vue';
import EditorModulesComponent from 'components/ui/drawer-tabs/common/sections/EditorModulesComponent.vue';
import SectionsViewComponent from 'components/ui/drawer-tabs/SectionsViewComponent.vue';
import SectionDesc from 'components/ui/drawer-tabs/SectionDesc';


@Component({
  name: 'CommonPanelComponent',
  components: {
    SectionsViewComponent,
  },
})
export default class CommonPanelComponent extends Vue {
  public readonly state: StoreState = this.$store.state;

  public readonly sections: SectionDesc[];

  public selectedSection: SectionDesc | null = null;

  public constructor() {
    super();

    this.sections = [
      { name: 'pages-section', title: 'Pages', icon: 'mdi-file-document-multiple', component: SitePagesComponent },
      { name: 'modules-section', title: 'Modules', icon: 'mdi-view-module', component: EditorModulesComponent },
    ];
  }
}
</script>

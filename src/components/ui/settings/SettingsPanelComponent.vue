<template>
  <v-container fluid>
    <v-row>
      <v-col v-if="state.currentNode" cols="12">
        <p v-if="panel">{{ panel.title || '---' }}</p>
        <component
          :is="part.componentName"
          v-for="(part, index) in parts"
          :key="`settings-part-${index}`"
          v-bind="{ setting: part }"
        />
      </v-col>
      <v-col v-else cols="12" class="d-flex flex-column align-center">
        <v-icon class="pa-8">mdi-selection-off</v-icon>
        <p>Select the node first.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SettingsPanelFactory from 'logic/model/settings/SettingsPanelFactory';
import { StoreState } from 'store';

@Component({
  name: 'SettingsPanelComponent',
  components: {},
})
export default class SettingsPanelComponent extends Vue {
  private settingsPanelFactory = SettingsPanelFactory.getInstance();

  public readonly state: StoreState = this.$store.state;

  public get panel() {
    return this.settingsPanelFactory.getPanel(this.state.currentNode);
  }

  public get parts() {
    return this.panel?.parts ?? []
  }
}
</script>

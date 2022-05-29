<template>
  <v-container fluid>
    <v-row>
      <v-col v-if="state.currentNode" cols="12" class="pa-0">
        <v-toolbar flat dense color="blue-grey lighten-5">
          <v-toolbar-title v-if="panel">
            <v-flex v-if="isInNameEditMode">
              <v-text-field v-model="editingNodeName" hide-details dense outlined>
                <template slot="prepend">
                  <v-btn icon small @click="saveNameEdit()">
                    <v-icon small>mdi-content-save</v-icon>
                  </v-btn>
                  <v-btn icon small @click="cancelNameEdit()">
                    <v-icon small>mdi-close</v-icon>
                  </v-btn>
                </template>
              </v-text-field>
            </v-flex>
            <template v-else>
              <v-btn icon small @click="startNameEdit()">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
              <span v-text="panel.title || '---'" />
            </template>
          </v-toolbar-title>
          <v-spacer />
          <v-btn icon @click="deselectNode()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <component
          :is="part.componentName"
          v-for="(part, index) in parts"
          :key="`settings-part-${index}`"
          v-bind="{ setting: part }"
        />
      </v-col>
      <no-selected-node-component v-else />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SettingsPanelFactory from 'logic/model/settings/SettingsPanelFactory';
import { StoreState } from 'store';

import NoSelectedNodeComponent from 'components/ui/drawer-tabs/NoSelectedNodeComponent.vue';

@Component({
  name: 'SettingsPanelComponent',
  components: {
    NoSelectedNodeComponent,
  },
})
export default class SettingsPanelComponent extends Vue {
  private settingsPanelFactory = SettingsPanelFactory.getInstance();

  public readonly state: StoreState = this.$store.state;

  public isInNameEditMode: boolean = false;
  public editingNodeName: string = '';

  public get panel() {
    return this.settingsPanelFactory.getPanel(this.state.currentNode);
  }

  public get parts() {
    return this.panel?.parts ?? []
  }

  public deselectNode(): void {
    this.state.currentNode = null;
  }

  public startNameEdit(): void {
    this.editingNodeName = this.panel?.model?.name ?? '';
    this.isInNameEditMode = true;
  }

  public cancelNameEdit(): void {
    this.isInNameEditMode = false;
    this.editingNodeName = '';
  }

  public saveNameEdit(): void {
    if (this.panel?.model) {
      this.panel.model.name = this.editingNodeName;
    }
    this.cancelNameEdit();
  }
}
</script>

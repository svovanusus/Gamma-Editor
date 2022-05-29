<template>
  <v-list>
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
      mandatory
    >
      <v-list-item v-for="item in modules" :key="item.name">
        <v-list-item-icon>
          <v-icon v-text="item.icon" />
        </v-list-item-icon>
        <v-list-item-title v-text="item.title" />
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { StoreState } from 'store';
import EditorModuleEnum, { EditorModulesDetails } from 'model/EditorModules';

interface ModuleDesc {
  name: string;
  icon: string;
  title: string;
}

@Component({
  name: 'EditorModulesComponent',
  components: {},
})
export default class EditorModulesComponent extends Vue {
  public readonly EditorModuleEnum = EditorModuleEnum;

  public readonly state: StoreState = this.$store.state;

  public get selectedItem(): number {
    return Object.keys(EditorModuleEnum).findIndex(x => this.state.currentEditorModule === EditorModuleEnum[x])
  }

  public set selectedItem(val: number) {
    this.state.currentEditorModule = EditorModuleEnum[Object.keys(EditorModuleEnum)[val]];
  }

  public get modules(): ModuleDesc[] {
    return [...EditorModulesDetails.keys()].map(x => <ModuleDesc>{
      name: x,
      icon: EditorModulesDetails.get(x).icon,
      title: EditorModulesDetails.get(x).title,
    });
  }
}
</script>
<template>
  <v-navigation-drawer v-show="isEditingMode" v-model="drawerState" app width="300">
    <v-tabs
      slot="prepend"
      v-model="tab"
      fixed-tabs dark
      color="white"
      background-color="indigo darken-3"
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab v-for="item in tabs" :key="`tab--${item.name}`" :href="`#${item.name}`">
        <v-icon>{{ item.icon }}</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" >
      <v-tab-item v-for="item in tabs" :key="`tab-value--${item.name}`" :value="item.name">
        <component :is="item.component" />
      </v-tab-item>
    </v-tabs-items>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
::v-deep .v-navigation-drawer__content {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 1px;
    background: rgba(0, 0, 0, 0.12);
  }
}
</style>

<script lang="ts">
import { Component, Vue, VModel } from 'vue-property-decorator';

import SettingsPanelComponent from 'components/ui/drawer-tabs/settings/SettingsPanelComponent.vue';
import CommonPanelComponent from 'components/ui/drawer-tabs/common/CommonPanelComponent.vue';
import NodesPannelComponent from 'components/ui/drawer-tabs/nodes/NodesPannelComponent.vue';

import { StoreState, StoreTypes } from 'store';
import DrawerTabEnum, { TabsDetails } from 'model/DrawerTabs';
import EditorMode from 'model/EditorMode';

interface TabDesc {
  name: string;
  icon: string;
  component: string;
}

@Component({
  name: 'EditorDrawerComponent',
  components: {
    SettingsPanelComponent,
    CommonPanelComponent,
    NodesPannelComponent,
  },
})
export default class EditorDrawerComponent extends Vue {
  @VModel({ default: true }) public readonly drawerState!: boolean;

  public readonly state: StoreState = this.$store.state;

  public get isEditingMode(): boolean {
    return this.state.editorMode === EditorMode.Editing;
  }

  public get tab(): DrawerTabEnum {
    return this.state.currentDrawerTab;
  }

  public set tab(val: DrawerTabEnum) {
    this.$store.commit(StoreTypes.mutations.SET_DRAWER_ACTIVE_TAB, val);
  }

  public get tabs(): TabDesc[] {
    return [...TabsDetails.keys()].map(x => <TabDesc>{
      name: x,
      icon: TabsDetails.get(x).icon,
      component: TabsDetails.get(x).component,
    });
  }
}
</script>

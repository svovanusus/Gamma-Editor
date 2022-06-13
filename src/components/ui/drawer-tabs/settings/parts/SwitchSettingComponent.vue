<template>
  <div class="mx-2 my-4 settings-part">
    <v-switch v-model="model" dense hide-details :label="setting.name" />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import SettingComponentBase from 'components/ui/drawer-tabs/settings/SettingComponentBase';

import SwitchSetting from 'logic/model/settings/parts/SwitchSetting';
import NodeBase from 'logic/model/page/NodeBase';

@Component({
  name: 'SwitchSettingComponent',
  components: {},
})
export default class SwitchSettingComponent extends SettingComponentBase<SwitchSetting<NodeBase>, boolean> {}
</script>

<template>
  <div class="mx-2 my-4 settings-part">
    <v-select v-model="model" :items="setting.items" :label="setting.name" item-text="label" item-value="value" hide-details outlined dense />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import SettingComponentBase from 'components/ui/drawer-tabs/settings/SettingComponentBase';

import SelectSetting from 'logic/model/settings/parts/SelectSetting';
import NodeBase from 'logic/model/page/NodeBase';

@Component({
  name: 'SelectSettingComponent',
  components: {},
})
export default class SelectSettingComponent extends SettingComponentBase<SelectSetting<NodeBase, unknown>, unknown> {}
</script>

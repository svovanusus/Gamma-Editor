<template>
  <div class="mx-2 my-4 settings-part">
    <v-text-field v-if="!setting.isMultiLine" v-model="model" outlined dense hide-details :label="setting.name" />
    <v-textarea v-else v-model="model" outlined dense hide-details :label="setting.name" :rows="setting.rows" />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import SettingComponentBase from 'components/ui/drawer-tabs/settings/SettingComponentBase';

import TextFieldSetting from 'logic/model/settings/parts/TextFieldSetting';
import NodeBase from 'logic/model/page/NodeBase';

@Component({
  name: 'TextFieldSettingComponent',
  components: {},
})
export default class TextFieldSettingComponent extends SettingComponentBase<TextFieldSetting<NodeBase>, string> {}
</script>

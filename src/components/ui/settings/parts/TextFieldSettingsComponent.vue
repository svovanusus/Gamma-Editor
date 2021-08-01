<template>
  <v-text-field v-model="model" outlined dense :label="setting.name" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import TextFieldSetting from 'logic/model/settings/parts/TextFieldSetting';
import NodeBase from 'logic/model/page/NodeBase';

@Component({
  name: 'TextFieldSettingComponent',
  components: {},
})
export default class TextFieldSettingComponent extends Vue {
  @Prop({ required: true }) public readonly setting!: TextFieldSetting<NodeBase>;

  public get model(): string {
    return this.setting.value;
  }

  public set model(val: string) {
    this.setting.value = val;
  }
}
</script>

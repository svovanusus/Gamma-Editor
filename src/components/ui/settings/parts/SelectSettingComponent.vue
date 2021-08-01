<template>
  <v-select v-model="model" :items="setting.items" :label="setting.name" outlined dense />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import SelectSetting from 'logic/model/settings/parts/SelectSetting';
import NodeBase from 'logic/model/page/NodeBase';

@Component({
  name: 'SelectSettingComponent',
  components: {},
})
export default class SelectSettingComponent extends Vue {
  @Prop({ required: true }) public readonly setting!: SelectSetting<NodeBase, unknown>;

  public get model(): unknown {
    return this.setting.value;
  }

  public set model(val: unknown) {
    this.setting.value = val;
  }
}
</script>

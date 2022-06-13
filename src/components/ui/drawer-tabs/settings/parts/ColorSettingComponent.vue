<template>
  <div class="mx-2 my-4 settings-part">
    <v-menu v-model="colorPickerState" :close-on-content-click="false" absolute offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-input label="Color" class="py-1 mt-4" hide-details dense>
          <v-spacer />
          <div
            :style="`background-color: ${model};`"
            class="color-preview"
            v-on="on"
            v-bind="attrs"
          />
        </v-input>
      </template>

      <v-color-picker
        v-model="model"
        dot-size="15"
        mode="hexa"
        elevation="15"
      />
    </v-menu>
  </div>
</template>

<style lang="scss" scoped>
.color-preview {
  cursor: pointer;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.38);
}
</style>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import SettingComponentBase from 'components/ui/drawer-tabs/settings/SettingComponentBase';

import ColorSetting from 'logic/model/settings/parts/ColorSetting';
import NodeBase from 'logic/model/page/NodeBase';

@Component({
  name: 'ColorSettingComponent',
  components: {},
})
export default class ColorSettingComponent extends SettingComponentBase<ColorSetting<NodeBase>, string> {
  public colorPickerState: boolean = false;
}
</script>

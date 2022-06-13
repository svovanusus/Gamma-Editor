<template>
  <v-sheet class="mx-2 my-4 settings-part pa-2" rounded outlined>
    <h3 class="pa-1 pb-2" v-text="setting.name" />
    <v-divider />

    <div class="d-flex mt-3">
      <v-text-field v-model="model.top.value" type="number" label="Top" outlined dense hide-details />
      <v-select v-model="model.top.measureType" :items="cssMeasureTypeOptions" item-text="label" item-value="value" class="css-measure-type-select ml-1" hide-details dense outlined />
    </div>

    <div class="d-flex mt-3">
      <v-text-field v-model="model.bottom.value" type="number" label="Bottom" outlined dense hide-details />
      <v-select v-model="model.bottom.measureType" :items="cssMeasureTypeOptions" item-text="label" item-value="value" class="css-measure-type-select ml-1" hide-details dense outlined />
    </div>

    <div class="d-flex mt-3">
      <v-text-field v-model="model.left.value" type="number" label="Left" outlined dense hide-details />
      <v-select v-model="model.left.measureType" :items="cssMeasureTypeOptions" item-text="label" item-value="value" class="css-measure-type-select ml-1" hide-details dense outlined />
    </div>

    <div class="d-flex mt-3">
      <v-text-field v-model="model.right.value" type="number" label="Right" outlined dense hide-details />
      <v-select v-model="model.right.measureType" :items="cssMeasureTypeOptions" item-text="label" item-value="value" class="css-measure-type-select ml-1" hide-details dense outlined />
    </div>
  </v-sheet>
</template>

<style lang="scss" scoped>
.css-measure-type-select {
  width: 90px;
  flex-shrink: 0;
  flex-grow: 0;
}
</style>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import NodeBase from 'logic/model/page/NodeBase';
import SettingComponentBase from 'components/ui/drawer-tabs/settings/SettingComponentBase';
import BoxSpacingSettings from 'logic/model/settings/parts/BoxSpacingSettings';
import BoxSpacingSettingsModel from 'logic/model/page/settings/BoxSpacingSettingsModel';
import SelectOption from 'model/SelectOption';
import SelectOptionsHelper from 'utils/SelectOptionsHelper';
import CssMeasureType from 'logic/model/page/settings/CssMeasureType';

@Component({
  name: 'BoxSpacingSettingsComponent',
  components: {},
})
export default class BoxSpacingSettingsComponent extends SettingComponentBase<BoxSpacingSettings<NodeBase, BoxSpacingSettingsModel>, BoxSpacingSettingsModel> {
  public cssMeasureTypeOptions: SelectOption<CssMeasureType>[] = SelectOptionsHelper.generateSelectOptionsForEnum(CssMeasureType);
}
</script>
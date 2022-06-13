<template>
  <div class="mx-2 my-4 settings-part">
    <div class="d-flex">
      <v-text-field v-model="model.value" type="number" :label="setting.name" outlined dense hide-details />
      <v-select v-model="model.measureType" :items="cssMeasureTypeOptions" item-text="label" item-value="value" class="css-measure-type-select ml-1" hide-details dense outlined />
    </div>
  </div>
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
import SettingComponentBase from 'components/ui/drawer-tabs/settings/SettingComponentBase';

import CssMeasureSetting from 'logic/model/settings/parts/CssMeasureSetting';
import NodeBase from 'logic/model/page/NodeBase';
import CssMeasure from 'logic/model/page/settings/CssMeasure';
import SelectOption from 'model/SelectOption';
import CssMeasureType from 'logic/model/page/settings/CssMeasureType';
import SelectOptionsHelper from 'utils/SelectOptionsHelper';

@Component({
  name: 'CssMeasureSettingComponent',
  components: {},
})
export default class CssMeasureSettingComponent extends SettingComponentBase<CssMeasureSetting<NodeBase>, CssMeasure> {
  public cssMeasureTypeOptions: SelectOption<CssMeasureType>[] = SelectOptionsHelper.generateSelectOptionsForEnum(CssMeasureType);
}
</script>

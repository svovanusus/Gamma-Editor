<template>
  <v-sheet class="mx-2 my-4 settings-part pa-2" rounded outlined>
    <h3 class="pa-1 pb-2" v-text="setting.name" />
    <v-divider />

    <v-select v-model="model.type" :items="backgoroundTypeOptions" label="Type" item-text="label" item-value="value" class="mt-3" hide-details outlined dense />

    <template v-if="model.type === BackgroundType.Color">
      <v-menu v-model="colorPickerState" :close-on-content-click="false" absolute offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-input label="Color" class="py-1 mt-4" hide-details dense>
            <v-spacer />
            <div
              :style="`background-color: ${model.color};`"
              class="color-preview"
              v-on="on"
              v-bind="attrs"
            />
          </v-input>
        </template>

        <v-color-picker
          v-model="model.color"
          dot-size="15"
          mode="hexa"
          elevation="15"
        />
      </v-menu>
    </template>

    <template v-if="model.type === BackgroundType.Image">
      <div class="d-flex align-center mt-3">
        <v-text-field v-model="resourceName" readonly outlined dense hide-details :label="setting.name" />
        <v-btn icon small @click="openSelectResourceDialog()">
          <v-icon small>mdi-image-plus</v-icon>
        </v-btn>
      </div>

      <v-divider class="mt-3" />

      <v-select v-model="model.size.type" :items="backgroundSizeTypeOptions" label="Size Type" item-text="label" item-value="value" class="mt-3" hide-details outlined dense />

      <template v-if="model.size.type === BackgroundSizeType.Fixed">
        <div class="d-flex mt-3">
          <v-text-field v-model="model.size.width.value" type="number" label="Background Width" outlined dense hide-details />
          <v-select v-model="model.size.width.measureType" :items="cssMeasureTypeOptions" item-text="label" item-value="value" class="css-measure-type-select ml-1" hide-details dense outlined />
        </div>

        <div class="d-flex mt-3">
          <v-text-field v-model="model.size.height.value" type="number" label="Background Height" outlined dense hide-details />
          <v-select v-model="model.size.height.measureType" :items="cssMeasureTypeOptions" item-text="label" item-value="value" class="css-measure-type-select ml-1" hide-details dense outlined />
        </div>

        <v-divider class="mt-3" />
      </template>

      <v-select v-model="model.position.type" :items="backgroundPositionTypeOptions" label="Position Type" item-text="label" item-value="value" class="mt-3" hide-details outlined dense />

      <template v-if="model.position.type === BackgroundPositionType.Custom">
        <div class="d-flex mt-3">
          <v-text-field v-model="model.position.offset.horizontal.value" type="number" label="Offset Horizontal" outlined dense hide-details />
          <v-select v-model="model.position.offset.horizontal.measureType" :items="cssMeasureTypeOptions" item-text="label" item-value="value" class="css-measure-type-select ml-1" hide-details dense outlined />
        </div>

        <div class="d-flex mt-3">
          <v-text-field v-model="model.position.offset.vertical.value" type="number" label="Offset Vertical" outlined dense hide-details />
          <v-select v-model="model.position.offset.vertical.measureType" :items="cssMeasureTypeOptions" item-text="label" item-value="value" class="css-measure-type-select ml-1" hide-details dense outlined />
        </div>

        <v-divider class="mt-3" />
      </template>

      <v-dialog v-model="selectResourceDialog" max-width="50vw">
        <v-card>
          <v-card-title>
            Select Resource
            <v-spacer />
            <v-btn icon @click="cancelResourceSelection()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider />
          <v-card-text style="max-height: 60vh;" class="overflow-auto">
            <media-manager-resources-selector-component v-model="selectedResourceForDialog" :resources="resources" :single="true" />
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer />
            <v-btn color="secondary" @click="cancelResourceSelection()">Cancel</v-btn>
            <v-btn color="primary" @click="completeResourceSelection()">Select</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>

    <v-slider v-model="model.transparency" label="Transparency" min="0" max="100" class="mt-3" thumb-label dense hide-details />
  </v-sheet>
</template>

<style lang="scss" scoped>
.color-preview {
  cursor: pointer;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.38);
}

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
import BackgroundSettings from 'logic/model/settings/parts/BackgroundSettings';
import BackgroundSettingsModel from 'logic/model/page/settings/BackgroundSettingsModel';
import SelectOption from 'model/SelectOption';
import BackgroundType from 'logic/model/page/settings/BackgroundType';
import SelectOptionsHelper from 'utils/SelectOptionsHelper';
import BackgroundSizeType from 'logic/model/page/settings/BackgroundSizeType';
import BackgroundPositionType from 'logic/model/page/settings/BackgroundPosigionType';
import IMadiaManagerService from 'logic/services/IMediaManagerService';
import MediaResource from 'logic/model/MediaResource';
import ServiceLocator from 'logic/services/ServiceLocator';
import MediaManagerResourcesSelectorComponent from 'components/ui/media/MediaManagerResourcesSelectorComponent.vue';
import CssMeasureType from 'logic/model/page/settings/CssMeasureType';

@Component({
  name: 'BackgroundSettingsComponent',
  components: { MediaManagerResourcesSelectorComponent },
})
export default class BackgroundSettingsComponent extends SettingComponentBase<BackgroundSettings<NodeBase, BackgroundSettingsModel>, BackgroundSettingsModel> {
  private mediaManagerService: IMadiaManagerService;

  public BackgroundType = BackgroundType;
  public BackgroundSizeType = BackgroundSizeType;
  public BackgroundPositionType = BackgroundPositionType;

  public backgoroundTypeOptions: SelectOption<BackgroundType>[] = SelectOptionsHelper.generateSelectOptionsForEnum(BackgroundType);
  public backgroundSizeTypeOptions: SelectOption<BackgroundSizeType>[] = SelectOptionsHelper.generateSelectOptionsForEnum(BackgroundSizeType);
  public backgroundPositionTypeOptions: SelectOption<BackgroundPositionType>[] = SelectOptionsHelper.generateSelectOptionsForEnum(BackgroundPositionType);
  public cssMeasureTypeOptions: SelectOption<CssMeasureType>[] = SelectOptionsHelper.generateSelectOptionsForEnum(CssMeasureType);

  public colorPickerState: boolean = false;

  public selectResourceDialog: boolean = false;
  public selectedResourceForDialog: MediaResource = null;

  public constructor() {
    super();
    const locator = ServiceLocator.getInstance();
    this.mediaManagerService = locator.getService('MediaManagerService');
  }

  public get color(): string {
    return this.model.color;
  }

  public get resources(): MediaResource[] {
    return this.mediaManagerService.getResources();
  }

  public get selectedResource(): MediaResource {
    return this.mediaManagerService.getResource(this.model.resourceUid);
  }

  public set selectedResource(val: MediaResource) {
    this.model.resourceUid = val?.resourceUid ?? null;
  }

  public get resourceName(): string {
    return this.selectedResource?.name ?? '';
  }

  public openSelectResourceDialog(): void {
    this.selectedResourceForDialog = this.selectedResource;
    this.selectResourceDialog = true;
  }

  public cancelResourceSelection(): void {
    this.selectedResourceForDialog = null;
    this.selectResourceDialog = false;
  }

  public completeResourceSelection(): void {
    this.selectedResource = this.selectedResourceForDialog;
    this.cancelResourceSelection();
  }
}
</script>
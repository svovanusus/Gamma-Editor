<template>
  <div class="mx-2 my-4 settings-part">
    <div class="d-flex align-center">
      <v-text-field v-model="resourceName" readonly outlined dense hide-details :label="setting.name" />
      <v-btn icon small @click="openSelectResourceDialog()">
        <v-icon small>mdi-image-plus</v-icon>
      </v-btn>
    </div>
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
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import SettingComponentBase from 'components/ui/drawer-tabs/settings/SettingComponentBase';
import ResourceSelectorSetting from 'logic/model/settings/parts/ResourceSelectorSetting';
import NodeBase from 'logic/model/page/NodeBase';
import MediaResource from 'logic/model/MediaResource';
import IMadiaManagerService from 'logic/services/IMediaManagerService';
import ServiceLocator from 'logic/services/ServiceLocator';
import MediaManagerResourcesSelectorComponent from 'components/ui/media/MediaManagerResourcesSelectorComponent.vue';

@Component({
  name: 'ResourceSelectorSettingComponent',
  components: { MediaManagerResourcesSelectorComponent },
})
export default class ResourceSelectorSettingComponent extends SettingComponentBase<ResourceSelectorSetting<NodeBase>, string> {
  private mediaManagerService: IMadiaManagerService;

  public selectResourceDialog: boolean = false;
  public selectedResourceForDialog: MediaResource = null;

  public constructor() {
    super();
    const locator = ServiceLocator.getInstance();
    this.mediaManagerService = locator.getService('MediaManagerService');
  }

  public get resources(): MediaResource[] {
    return this.mediaManagerService.getResources();
  }

  public get selectedResource(): MediaResource {
    return this.mediaManagerService.getResource(this.model);
  }

  public set selectedResource(val: MediaResource) {
    this.model = val?.resourceUid ?? null;
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
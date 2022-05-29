<template>
  <v-container fluid class="media-manager">
    <v-row class="media-manager-header-row">
      <v-toolbar dense color="white" class="media-manager-toolbar">
        <v-col cols="8" class="px-4 py-0 d-flex align-center">
          <v-text-field
            v-model="searchText"
            dense
            outlined
            hide-details
            clearable
            append-icon="mdi-magnify"
            placeholder="Search"
          />
          <v-spacer />
          <v-btn icon title="Upload New Files" @click="isUploadSectionOpen = !isUploadSectionOpen">
            <v-icon>mdi-upload</v-icon>
          </v-btn>
        </v-col>
        <div class="divider" />
        <v-col cols="4" class="px-4 py-0 d-flex align-center">
          <v-toolbar-title v-text="itemTitle" />
          <v-spacer />
          <v-btn v-if="selectedItems.length" icon small @click="resetSelection()">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-toolbar>
    </v-row>
    <v-row class="media-manager-container-row">
      <v-col cols="8" class="pa-0">
        <v-sheet color="white" class="pa-3 media-manager-content">
          <v-expand-transition>
            <v-sheet v-show="isUploadSectionOpen" color="blue-grey lighten-5" elevation="2" rounded="lg" class="pa-0 overflow-hidden">
              <v-toolbar flat dense color="blue-grey lighten-5">
                <v-toolbar-title>Upload New Files</v-toolbar-title>
                <v-spacer />
                <v-btn icon small @click="isUploadSectionOpen = false">
                  <v-icon small>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <media-manager-dropzone-component />
            </v-sheet>
          </v-expand-transition>

          <media-manager-resources-selector-component v-model="selectedItems" :resources="items" />
        </v-sheet>
      </v-col>
      <v-col cols="4" class="pa-0">
        <media-manager-resource-properties
          :resources="selectedItems"
          @select-all-click="selectAllItems()"
          @delete-click="deleteSelectedItems()"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.media-manager {
  height: 100%;

  .media-manager-toolbar::v-deep .v-toolbar__content  {
    padding: 0;

    .divider {
      width: 0;
      height: 48px;
      border-right: 1px dashed #283593;
    }
  }

  .media-manager-container-row {
    height: calc(100vh - 96px);

    & > * {
      height: 100%;
      overflow: auto;
    }

    .media-manager-properties {
      min-height: 100%;
    }
  }
}
</style>

<script lang="ts">
import IMediaManagerService from 'logic/services/IMediaManagerService';
import MediaResource from 'logic/model/MediaResource';
import ServiceLocator from 'logic/services/ServiceLocator';
import { Component, Vue } from 'vue-property-decorator';
import MediaManagerResourcesSelectorComponent from 'components/ui/media/MediaManagerResourcesSelectorComponent.vue';
import MediaManagerResourceProperties from 'components/ui/media/MediaManagerResourceProperties.vue';
import MediaManagerDropzoneComponent from 'components/ui/media/MediaManagerDropzoneComponent.vue';

@Component({
  name: 'MediaManagerComponent',
  components: {
    MediaManagerResourcesSelectorComponent,
    MediaManagerResourceProperties,
    MediaManagerDropzoneComponent,
  },
})
export default class MediaManagerComponent extends Vue {
  private mediaManagerService: IMediaManagerService = null;

  public searchText: string = '';
  public isUploadSectionOpen: boolean = false;

  public selectedItems: MediaResource[] = [];

  public constructor() {
    super();
    const locator = ServiceLocator.getInstance();
    this.mediaManagerService = locator.getService('MediaManagerService');
  }

  public get items(): MediaResource[] {
    return this.mediaManagerService?.getResources() ?? [];
  }

  public get itemTitle(): string {
    if (this.selectedItems.length === 1) {
      return this.selectedItems[0].name;
    }
    if (this.selectedItems.length > 1) {
      return `Selected ${this.selectedItems.length} Items`;
    }
    return '';
  }

  public resetSelection(): void {
    this.selectedItems = [];
  }

  public selectAllItems(): void {
    this.selectedItems = this.items.map(x => x);
  }

  public deleteSelectedItems(): void {
    this.mediaManagerService.deleteResourceRange(this.selectedItems.map(x => x.resourceUid));
    this.resetSelection();
  }
}
</script>
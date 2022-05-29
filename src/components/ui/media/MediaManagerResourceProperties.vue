<template>
  <v-sheet color="blue-grey lighten-5" class="pa-3 media-manager-properties">
    <media-manager-resource-property-section v-if="resources.length >= 1" v-model="propertiesSectionExpand" title="Properties">
      <v-list dense>
        <v-list-item v-if="resources.length === 1">
          <v-list-item-content>
            <v-text-field
              v-model="resources[0].resourceUid" 
              dense hide-details
              outlined readonly
              label="UID" class="field-with-button"
            >
              <v-btn slot="append" small icon>
                <v-icon small>mdi-content-copy</v-icon>
              </v-btn>
            </v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="resources.length === 1">
          <v-list-item-content>Resolution:</v-list-item-content>
          <v-list-item-content class="justify-end">{{ resources[0].width }}x{{ resources[0].height }}</v-list-item-content>
        </v-list-item>

        <v-list-item v-if="resources.length === 1">
          <v-list-item-content>Size:</v-list-item-content>
          <v-list-item-content class="justify-end" v-text="formatFileSize(resources[0].size)" />
        </v-list-item>

        <v-list-item v-if="resources.length > 1">
          <v-list-item-content>Total Size:</v-list-item-content>
          <v-list-item-content class="justify-end" v-text="formatFileSize(totalSelectedSize)" />
        </v-list-item>
      </v-list>
    </media-manager-resource-property-section>

    <media-manager-resource-property-section v-if="resources.length >= 1" v-model="optionsSectionExpand" title="Options">
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="defaultAltEditing"
              dense outlined
              hide-details label="Default Alt"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </media-manager-resource-property-section>

    <media-manager-resource-property-section v-if="resources.length === 1" v-model="previewSectionExpand" title="Preview">
      <v-hover v-slot="{ hover }">
        <v-img
          :src="resources[0].url"
          :alt="resources[0].defaultAlt"
          style="cursor: pointer;"
          @click="previewDialog = true"
        >
          <v-overlay :value="hover" absolute color="blue-grey darken-4">
            <v-icon dark x-large>mdi-magnify-plus-outline</v-icon>
          </v-overlay>
        </v-img>
      </v-hover>
    </media-manager-resource-property-section>
      
    <media-manager-resource-property-section v-if="resources.length === 1" v-model="descriptionSectionExpand" title="Description">
      <v-textarea v-model="resources[0].description" solo dense hide-details />
    </media-manager-resource-property-section>

    <media-manager-resource-property-section v-if="resources.length === 1" v-model="updateSectionExpand" title="Update">
      <media-manager-dropzone-component />
    </media-manager-resource-property-section>

    <div v-if="resources.length >= 1" class="d-flex align-center justify-end">
      <v-btn color="red" dark @click="deleteDialog = true">
        <v-icon>mdi-delete</v-icon>
        Delete
      </v-btn>
    </div>

    <div v-if="!resources.length" class="d-flex flex-column align-center">
      <v-icon class="pa-8">mdi-selection-off</v-icon>
      <p>Select the media item.</p>
      <v-btn color="primary darken-2" @click="selectAllItems()">
        Select All
      </v-btn>
    </div>

    <v-dialog v-model="previewDialog" max-width="80vw">
      <v-card v-if="resources.length">
        <v-img
          :alt="resources[0].defaultAlt"
          :src="resources[0].url"
        >
          <v-card-title>
            <v-spacer />
            <v-btn icon dark @click="previewDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
        </v-img>
      </v-card>
    </v-dialog>

    <v-dialog v-model="deleteDialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          Confirm deletion
          <v-spacer />
          <v-btn icon @click="deleteDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>Are you sure you want to delete selected item?</v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn text color="secondary" @click="deleteDialog = false">Cancel</v-btn>
          <v-btn color="red" dark @click="deleteItems()">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<style lang="scss" scoped>
.field-with-button::v-deep .v-input__append-inner {
  margin-top: 6px;
}
</style>

<script lang="ts">
import MediaResource from 'logic/model/MediaResource';
import FormatHelper from 'utils/FormatHelper';
import { Component, Vue, Prop } from 'vue-property-decorator';
import MediaManagerResourcePropertySection from 'components/ui/media/MediaManagerResourcePropertySection.vue';
import MediaManagerDropzoneComponent from 'components/ui/media/MediaManagerDropzoneComponent.vue';

@Component({
  name: '',
  components: {
    MediaManagerResourcePropertySection,
    MediaManagerDropzoneComponent,
  },
})
export default class MediaManagerResourceProperties extends Vue {
  @Prop({ default: () => [] }) public readonly resources!: MediaResource[];

  public propertiesSectionExpand: boolean = true;
  public optionsSectionExpand: boolean = true;
  public descriptionSectionExpand: boolean = false;
  public previewSectionExpand: boolean = false;
  public updateSectionExpand: boolean = false;

  public previewDialog: boolean = false;
  public deleteDialog: boolean = false;

  public get totalSelectedSize(): number {
    return this.resources.reduce((sum, item) => sum + item.size, 0);
  }

  public get defaultAltEditing(): string {
    let defaultAlt = '';
    if (this.resources.length > 0) {
      defaultAlt = this.resources[0].defaultAlt;
    }
    if (this.resources.every(x => x.defaultAlt === defaultAlt)) {
      return defaultAlt;
    }
    return '';
  }

  public set defaultAltEditing(val: string) {
    this.resources.forEach(x => x.defaultAlt = val);
  }

  public formatFileSize(size: number): string {
    return FormatHelper.formatFileSize(size);
  }

  public selectAllItems(): void {
    this.$emit('select-all-click');
  }

  public deleteItems(): void {
    this.$emit('delete-click');
    this.deleteDialog = false;
  }
}
</script>
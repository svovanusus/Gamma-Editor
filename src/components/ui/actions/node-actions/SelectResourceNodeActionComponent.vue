<template>
  <v-flex>
    <v-btn icon @click="openSelectResourceDialog()">
      <v-icon>mdi-image-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialogState" max-width="50vw">
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
  </v-flex>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import NodeActionBaseComponent from 'components/ui/actions/node-actions/NodeActionBaseComponent';
import SelectResourceNodeAction from 'logic/model/actions/node-actions/SelectResourceNodeAction';
import MediaResource from 'logic/model/MediaResource';
import IMediaManagerService from 'logic/services/IMediaManagerService';
import ServiceLocator from 'logic/services/ServiceLocator';
import NodeBase from 'logic/model/page/NodeBase';
import MediaManagerResourcesSelectorComponent from 'components/ui/media/MediaManagerResourcesSelectorComponent.vue';

@Component({
  name: 'SelectResourceNodeActionComponent',
  components: {
    MediaManagerResourcesSelectorComponent,
  },
})
export default class SelectResourceNodeActionComponent extends NodeActionBaseComponent<SelectResourceNodeAction<NodeBase>> {
  private mediaManagerService: IMediaManagerService;

  public dialogState: boolean = false;
  public selectedResourceForDialog: MediaResource = null;

  public constructor() {
    super();
    const locator = ServiceLocator.getInstance();
    this.mediaManagerService = locator.getService('MediaManagerService');
  }

  public get resources(): MediaResource[] {
    return this.mediaManagerService.getResources();
  }

  public openSelectResourceDialog(): void {
    this.selectedResourceForDialog = this.resources.find(x => x.resourceUid === this.action.node[this.action.fieldName]);
    this.dialogState = true;
  }

  public cancelResourceSelection(): void {
    this.selectedResourceForDialog = null;
    this.dialogState = false;
  }

  public completeResourceSelection(): void {
    this.action.node[this.action.fieldName as string] = this.selectedResourceForDialog.resourceUid;
    this.cancelResourceSelection();
  }
}
</script>
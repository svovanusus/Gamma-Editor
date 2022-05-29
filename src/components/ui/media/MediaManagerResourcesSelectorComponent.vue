<template>
  <v-container fluid>
    <v-row @click="itemsContainerClick($event)">
      <v-col v-for="resource in resources" :key="`item-${resource.resourceUid}`" cols="4">
        <media-manager-resource-card-component :resource="resource" :selected="isItemSelected(resource)" @click="itemClick($event, resource)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import MediaResource from 'logic/model/MediaResource';
import { Component, Vue, VModel, Prop } from 'vue-property-decorator';
import MediaManagerResourceCardComponent from 'components/ui/media/MediaManagerResourceCardComponent.vue';

@Component({
  name: 'MediaManagerResourcesSelectorComponent',
  components: { MediaManagerResourceCardComponent },
})
export default class MediaManagerResourcesSelectorComponent extends Vue {
  @VModel({ required: true }) public model!: MediaResource[] | MediaResource;
  @Prop({ default: () => [] }) public readonly resources!: MediaResource[];
  @Prop({ default: false }) public readonly single!: boolean;

  public lastClickedItem: MediaResource = null;

  public get selectedItems(): MediaResource[] {
    return this.single ? [this.model as MediaResource].filter(x => !!x) : (this.model as MediaResource[]);
  }

  public set selectedItems(val: MediaResource[]) {
    this.model = this.single ? (val[0] ?? null) : val;
  }

  public isItemSelected(item: MediaResource): boolean {

    return this.selectedItems.some(x => x.resourceUid === item.resourceUid);
  }

  public itemClick(event: PointerEvent, item: MediaResource): void {
    if (!this.single) {
      if (event.shiftKey && this.selectedItems.length > 0) {
        const lastClickIndex = this.resources.findIndex(x => x.resourceUid === this.lastClickedItem.resourceUid);
        const currentClickIndex = this.resources.findIndex(x => x.resourceUid === item.resourceUid);
        if (lastClickIndex < 0 || currentClickIndex < 0) return;

        const res: MediaResource[] = [];
        for (let i = Math.min(lastClickIndex, currentClickIndex); i <= Math.max(lastClickIndex, currentClickIndex); i++) {
          res.push(this.resources[i]);
        }
        this.selectedItems = res;
        return;
      }

      if (event.ctrlKey) {
        if (this.isItemSelected(item)) {
          this.selectedItems = this.selectedItems.filter(x => x.resourceUid !== item.resourceUid);
        } else {
          this.selectedItems.push(item);
        }
        this.lastClickedItem = item;
        return;
      }
    }

    this.selectedItems = [item];
    this.lastClickedItem = item;
  }

  public resetSelection(): void {
    this.selectedItems = [];
    this.lastClickedItem = null;
  }

  public itemsContainerClick(event: PointerEvent): void {
    if (!event.ctrlKey && !event.shiftKey && !((event.target as HTMLElement).closest('.media-item'))) {
      this.resetSelection();
    }
  }
}
</script>
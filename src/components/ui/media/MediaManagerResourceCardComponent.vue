<template>
  <v-card
    ripple elevation="2"
    rounded="lg" :color="selected ? 'blue lighten-4' : 'white'"
    class="media-item"
    @click="$emit('click', $event)"
  >
    <v-img alt="img1" :src="resource.url" />
    <v-card-title class="pt-1 justify-center" v-text="resource.name" />
    <v-card-subtitle class="pb-1 text-right" v-text="formatFileSize(resource.size)" />
  </v-card>
</template>

<style lang="scss" scoped>
.media-item {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */
}
</style>

<script lang="ts">
import MediaResource from 'logic/model/MediaResource';
import FormatHelper from 'utils/FormatHelper';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'MediaManagerResourceCardComponent',
  components: {},
})
export default class MediaManagerResourceCardComponent extends Vue {
  @Prop({ required: true }) public readonly resource!: MediaResource;
  @Prop({ default: false }) public readonly selected!: boolean;

  public formatFileSize(size: number): string {
    return FormatHelper.formatFileSize(size);
  }
}
</script>
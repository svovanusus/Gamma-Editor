<template>
  <div class="pa-4 pt-1 media-manager-upload-section">
    <div class="pa-6 rounded-xl d-flex flex-column justify-center align-center dropzone">
      <h2 class="mb-2">Drop files here</h2>
      <p class="ma-0">
        or
        <v-btn color="primary darken-2" @click="selectFile()">Select files</v-btn>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropzone {
  border: 2px dashed #283593;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'MediaManagerDropzoneComponent',
  components: {},
})
export default class MediaManagerDropzoneComponent extends Vue {
  public selectFile(): void {
    const some = {};
    this.$emit('file-select', some);
  }
}
</script>
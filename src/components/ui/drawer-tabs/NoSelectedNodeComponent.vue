<template>
  <v-sheet class="d-flex flex-column align-center no-selected-node">
    <v-icon class="pa-8">mdi-selection-off</v-icon>
    <p>Select the node first.</p>
  </v-sheet>
</template>

<style lang="scss" scoped>
.no-selected-node {
  width: 100%;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'NoSelectedNodeComponent',
  components: {},
})
export default class NoSelectedNodeComponent extends Vue {
}
</script>
<template>
  <div class="litegraph litegraph-editor-wrapper">
    <div v-if="showHeader" class="header"></div>
    <div class="litegraph-editor-container">
      <canvas ref="canvas" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.litegraph.litegraph-editor-wrapper {
  height: 100%;

  & .litegraph-editor-container {
    height: 100%;

    canvas {
      display: block;
      width: 100%;
      height: 100%;
      max-height: 100%;
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator';
import { LGraph, LGraphCanvas } from 'litegraph.js/build/litegraph_mini';
import 'litegraph.js/css/litegraph.css';

@Component({
  name: 'LitegraphEditorComponent',
  components: {},
})
export default class LitegraphEditorComponent extends Vue {
  @Prop({ default: false }) public readonly showHeader!: boolean;
  @VModel({ default: '' }) public modelString!: string;

  public graph: LGraph = null;
  public graphCanvas: LGraphCanvas = null;

  public mounted(): void {
    this.graph = new LGraph();
    this.graphCanvas = new LGraphCanvas(this.$refs['canvas'] as HTMLCanvasElement, this.graph, { autoresize: true });

    try {
      if (this.modelString) {
        this.graph.configure(JSON.parse(this.modelString));
      }
    }
    catch (ex) {
      console.warn(ex);
    }
  }
}
</script>
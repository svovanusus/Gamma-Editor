<template>
  <div class="litegraph litegraph-editor-wrapper">
    <div v-if="showHeader" class="graph-header pa-2 white d-flex">
      <v-spacer />
      <v-btn color="secondary" dark small @click="saveGraph()">Save Changes</v-btn>
    </div>
    <div class="litegraph-editor-container">
      <canvas ref="canvas" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.litegraph.litegraph-editor-wrapper {
  position: relative;
  height: 100%;

  & .graph-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

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
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { LGraph, LGraphCanvas } from 'litegraph.js/build/litegraph_mini';
import 'litegraph.js/css/litegraph.css';
import { StoreState } from 'store';

@Component({
  name: 'LitegraphEditorComponent',
  components: {},
})
export default class LitegraphEditorComponent extends Vue {
  @Prop({ default: false }) public readonly showHeader!: boolean;

  public state: StoreState = this.$store.state;
  public graph: LGraph = null;
  public graphCanvas: LGraphCanvas = null;

  public get modelString(): string {
    return this.state.currentDocument?.graphModel ?? '{}';
  }

  public set modelString(val: string) {
    if (this.state.currentDocument) {
      this.state.currentDocument.graphModel = val;
    }
  }

  public mounted(): void {
    this.loadGraphEditor(this.modelString);
  }

  public saveGraph(): void {
    this.modelString = JSON.stringify(this.graph.serialize());
  }

  @Watch('modelString')
  public onModelUpdate(newValue: string, oldValue: string): void {
    if (oldValue === newValue) return;

    this.loadGraphEditor(newValue);
  }

  private loadGraphEditor(modelString: string): void {
    if (!this.graph) {
      this.graph = new LGraph();
    }

    if (!this.graphCanvas) {
      this.graphCanvas = new LGraphCanvas(this.$refs['canvas'] as HTMLCanvasElement, this.graph, { autoresize: true });
    }

    try {
      if (modelString) {
        console.log('UPDATE!!!');
        this.graph.configure(JSON.parse(modelString));
      }
    }
    catch (ex) {
      console.warn(ex);
    }
  }
}
</script>
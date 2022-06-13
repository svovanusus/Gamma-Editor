<template>
  <div class="node" :id="node.id">
    <div class="node-inner" @click.prevent.stop="onClick()">
      <slot>
        <div v-if="isEditingMode" class="node-placeholder">Empty Node</div>
      </slot>
    </div>
    <div v-if="isEditingMode" class="node-external" @click.prevent.stop="() => {}">
      <div class="outlinear" :class="{ 'show': isSelected, 'hide': isChildrenHover }"></div>
      <div v-if="isSelected" class="editor-ui">
        <node-actions-panel-component />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { StoreState, StoreTypes } from 'store';
import { Component, Vue, Prop } from 'vue-property-decorator';
import NodeActionsPanelComponent from 'components/ui/actions/NodeActionsPanelComponent.vue';
import NodeBase from 'logic/model/page/NodeBase';
import EditorMode from 'model/EditorMode';

@Component({
  name: 'ComponentWrapper',
  components: { NodeActionsPanelComponent },
})
export default class ComponentWrapper extends Vue {
  @Prop({ required: true }) readonly componentId!: string;
  @Prop({ default: false }) readonly isChildrenHover!: boolean;
  @Prop({ required: true }) readonly node: NodeBase;

  public readonly state: StoreState = this.$store.state;

  public get isEditingMode(): boolean {
    return this.state.editorMode === EditorMode.Editing;
  }

  public get isSelected(): boolean {
    return this.isEditingMode && this.componentId === this.state.currentNode?.id;
  }

  public onClick(): void {
    if (this.isEditingMode) {
      this.$store.dispatch(StoreTypes.actions.SELECT_NODE, { node: this.node });
    }
  }
}
</script>

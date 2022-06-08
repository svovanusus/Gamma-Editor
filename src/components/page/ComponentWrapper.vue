<template>
  <div class="node" :id="node.id">
    <div class="node-inner" @click.prevent.stop="onClick()">
      <slot>
        <div class="node-placeholder">Empty Node</div>
      </slot>
    </div>
    <div class="node-external" @click.prevent.stop="() => {}">
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

@Component({
  name: 'ComponentWrapper',
  components: { NodeActionsPanelComponent },
})
export default class ComponentWrapper extends Vue {
  @Prop({ required: true }) readonly componentId!: string;
  @Prop({ default: false }) readonly isChildrenHover!: boolean;
  @Prop({ required: true }) readonly node: NodeBase;

  public readonly state: StoreState = this.$store.state;

  public get isSelected(): boolean {
    return this.componentId === this.state.currentNode?.id;
  }

  public onClick(): void {
    this.$store.dispatch(StoreTypes.actions.SELECT_NODE, { node: this.node });
  }
}
</script>

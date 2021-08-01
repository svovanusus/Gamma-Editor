<template>
  <div class="node">
    <slot>
      <div class="node-placeholder">Empty Node</div>
    </slot>
    <div class="outlinear" :class="{ 'show': isSelected, 'hide': isChildrenHover }"></div>
    <div v-if="isSelected" class="editor-ui">
      <node-actions-panel-component />
    </div>
  </div>
</template>

<script lang="ts">
import { StoreState } from 'store';
import { Component, Vue, Prop } from 'vue-property-decorator';
import NodeActionsPanelComponent from 'components/ui/actions/NodeActionsPanelComponent.vue';

@Component({
  name: 'ComponentWrapper',
  components: { NodeActionsPanelComponent },
})
export default class ComponentWrapper extends Vue {
  @Prop({ required: true }) readonly componentId!: string;
  @Prop({ default: false }) readonly isChildrenHover!: boolean;

  public readonly state: StoreState = this.$store.state;

  public get isSelected(): boolean {
    return this.componentId === this.state.currentNode?.id;
  }
}
</script>

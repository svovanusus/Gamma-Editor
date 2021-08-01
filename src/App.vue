<template>
  <div id="app">
    <div class="editor-ui">
      <v-app app>
        <editor-header-component ref="header" />
        <editor-drawer-component ref="drawer" />
        <v-main app @click.native="pageClick">
          <editor-breadcrumbs-component ref="breadcrumbs" @content-update="breadcrumbsUpdate" />
        </v-main>
      </v-app>
    </div>
    <div class="editor-content" ref="page">
      <component v-if="model" :is="model.componentName" v-bind="{ model }" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  position: relative;

  .editor-content {
    position: absolute;
    right: 0;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import EditorDrawerComponent from 'components/ui/EditorDrawerComponent.vue';
import EditorHeaderComponent from 'components/ui/EditorHeaderComponent.vue';
import EditorBreadcrumbsComponent from 'components/ui/EditorBreadcrumbsComponent.vue';

import NodeFactory from 'logic/model/NodeFactory';
import NodeBase from 'logic/model/page/NodeBase';
import INodeModel from 'model/INodeModel';
import { StoreState, StoreTypes } from 'store';
import PageDocument from 'logic/model/page/PageDocument';

@Component({
  name: 'App',
  components: {
    EditorHeaderComponent,
    EditorDrawerComponent,
    EditorBreadcrumbsComponent,
  },
})
export default class App extends Vue {
  public state: StoreState = this.$store.state;

  public get model(): PageDocument {
    return this.state.document;
  }

  public pageClick() {
    this.$store.dispatch(StoreTypes.actions.SELECT_NODE, { node: null, isPropsOpen: false });
  }

  public mounted() {
    const obj = {
      type: 0,
      id: '0-0',
      title: 'Homepage',
      children: [
        {
          type: 1,
          id: '0-1',
          text: 'Custom Text',
        } as INodeModel,
        {
          type: 3,
          id: '0-2',
          children: [
            {
              type: 1,
              id: '0-3',
              text: 'Text 2',
            } as INodeModel,
            {
              type: 1,
              id: '0-4',
              text: 'Text 3',
            } as INodeModel,
            {
              type: 2,
              id: '0-5',
              text: 'Button text #1',
              action: 'http://ya.ru',
            } as INodeModel,
          ],
        } as INodeModel,
      ],
    } as INodeModel;

    const _nodeFactory = NodeFactory.getInstance();

    this.$store.commit(
      StoreTypes.mutations.SET_DOCUMENT,
      _nodeFactory.createNodeByType(obj.type)?.load(obj) ?? ({} as NodeBase)
    );

    this.offsetsUpdate();
  }

  public breadcrumbsUpdate() {
    this.$nextTick(this.offsetsUpdate);
  }

  private offsetsUpdate(): void {
    const header = this.$refs.header as Vue;
    const breadcrumbs = this.$refs.breadcrumbs as Vue;
    const drawer = this.$refs.drawer as Vue;
    const page = this.$refs.page as HTMLDivElement;
    page.style.setProperty('top', `${header.$el.clientHeight + breadcrumbs.$el.clientHeight}px`);
    page.style.setProperty('left', `${drawer.$el.clientWidth}px`);
  }
}
</script>

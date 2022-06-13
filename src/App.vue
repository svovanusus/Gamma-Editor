<template>
  <div id="app">
    <div class="editor-ui">
      <v-app app>
        <editor-header-component ref="header" />
        <editor-drawer-component ref="drawer" v-model="drawerState" />
        <v-main app @click.native="pageClick" ref="main">
          <litegraph-editor-component v-if="isEditingMode && state.currentEditorModule === EditorModuleEnum.GraphEditor" :showHeader="true" />
          <media-manager-component v-if="isEditingMode && state.currentEditorModule === EditorModuleEnum.MediaManager" />
        </v-main>
        <button v-if="isEditingMode" class="drawer-toggle" :style="`left: ${contentOffset.x}px;`" @click.prevent.stop="drawerState = !drawerState">
          <v-icon color="white">
            mdi-chevron-{{ drawerState ? 'left' : 'right' }}
          </v-icon>
        </button>
        <v-footer v-if="isEditingMode && state.currentEditorModule === EditorModuleEnum.PageEditor" ref="footer" app fixed inset elevation="4" color="white" class="app-footer">
          <editor-breadcrumbs-component ref="breadcrumbs" />
        </v-footer>
      </v-app>
    </div>
    <div class="editor-content" ref="page" :style="`left: ${contentOffset.x}px; top: ${contentOffset.y}px; padding-bottom: ${breadcrumbsHeight}px;`">
      <component
        v-if="state.currentEditorModule === EditorModuleEnum.PageEditor && model"
        :is="model.componentName"
        v-bind="{ model }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  position: relative;

  .app-footer {
    z-index: 100;
  }

  .editor-content {
    position: absolute;
    right: 0;
  }

  .drawer-toggle {
    position: fixed;
    left: 0;
    top: calc(50vh - 48px);
    transform: translate(-60%, -50%);
    clip-path: inset(-10px 0 -10px 60%);
    z-index: 7;
    background: rgba(40, 53, 147, 0.4);
    padding: 30px 0;
    border-radius: 0 10px 10px 0;
    transition: transform ease-in-out .2s, clip-path ease-in-out .2s, background ease-in-out .2s;

    &::before, &::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      background: transparent;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      transition: box-shadow ease-in-out .2s;
    }

    &::before {
      bottom: 100%;
      box-shadow: -10px 10px 0 0 rgba(40, 53, 147, .4);
      clip-path: inset(50% 50% -0.7px 0);
    }

    &::after {
      top: 100%;
      box-shadow: -10px -10px 0 0 rgba(40, 53, 147, .4);
      clip-path: inset(-0.7px 50% 50% 0);
    }

    &:hover {
      transform: translate(0, -50%);
      clip-path: inset(-10px 0 -10px 0);
      background: rgba(40, 53, 147, 0.6);

      &::before {
        box-shadow: -10px 10px 0 0 rgba(40, 53, 147, .6);
      }

      &::after {
        box-shadow: -10px -10px 0 0 rgba(40, 53, 147, .6);
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import EditorDrawerComponent from 'components/ui/EditorDrawerComponent.vue';
import EditorHeaderComponent from 'components/ui/EditorHeaderComponent.vue';
import EditorBreadcrumbsComponent from 'components/ui/EditorBreadcrumbsComponent.vue';
import LitegraphEditorComponent from 'components/ui/litegraph/LitegraphEditorComponent.vue';
import MediaManagerComponent from 'components/ui/media/MediaManagerComponent.vue';

import NodeFactory from 'logic/model/NodeFactory';
import NodeBase from 'logic/model/page/NodeBase';
import { StoreState, StoreTypes } from 'store';
import PageLoader from 'store/page-loader';
import PageDocument from 'logic/model/page/PageDocument';
import EditorModuleEnum from 'model/EditorModules';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import EditorMode from 'model/EditorMode';

@Component({
  name: 'App',
  components: {
    EditorHeaderComponent,
    EditorDrawerComponent,
    EditorBreadcrumbsComponent,
    LitegraphEditorComponent,
    MediaManagerComponent,
  },
})
export default class App extends Vue {
  public readonly EditorModuleEnum = EditorModuleEnum;

  public state: StoreState = this.$store.state;

  public contentOffset: { x: number, y: number } = { x: 0, y: 80 };
  
  public get isEditingMode(): boolean {
    return this.state.editorMode === EditorMode.Editing;
  }

  public get breadcrumbsHeight(): number {
    return this.isEditingMode && this.state.currentEditorModule === EditorModuleEnum.PageEditor && this.model
      ? this.pBreadcrumbsHeight
      : 0;
  }

  public get model(): PageDocument {
    return this.state.currentDocument;
  }

  public get drawerState(): boolean {
    return this.isEditingMode && this.state.drawerState;
  }

  public set drawerState(val: boolean) {
    if (this.isEditingMode) {
      this.$store.commit(StoreTypes.mutations.SET_DRAWER_STATE, val);
    }
  }

  public pageClick() {
    this.$store.dispatch(StoreTypes.actions.SELECT_NODE, { node: null, isPropsOpen: false });
  }

  public mounted() {
    const _nodeFactory = NodeFactory.getInstance();

    this.$store.commit(
      StoreTypes.mutations.ADD_DOCUMENT,
      _nodeFactory.createNodeByType(NodeTypeEnum.PageDocumentNodeType)?.load(PageLoader.getExample1()) ?? ({} as NodeBase)
    );

    this.$store.commit(
      StoreTypes.mutations.ADD_DOCUMENT,
      _nodeFactory.createNodeByType(NodeTypeEnum.PageDocumentNodeType)?.load(PageLoader.getExample2()) ?? ({} as NodeBase)
    );

    this.$store.commit(StoreTypes.mutations.SET_DOCUMENT, this.state.documents[0].id);

    this.setupWatchers();
  }

  private setupWatchers(): void {
    const obs = new ResizeObserver(() => this.updateContentOffset());
    obs.observe((this.$refs.main as Vue).$el.firstElementChild);
  }

  private updateContentOffset(): void {
    const header = this.$refs.header as Vue;
    const footer = this.$refs.footer as Vue;
    const main = this.$refs.main as Vue;

    this.contentOffset.x = (main.$el.firstElementChild as HTMLElement)?.offsetLeft ?? 0;
    this.contentOffset.y = (header?.$el.clientHeight ?? 48);
    this.pBreadcrumbsHeight = (footer?.$el.clientHeight ?? 36);

    this.$store
  }

  private pBreadcrumbsHeight: number = 36;
}
</script>

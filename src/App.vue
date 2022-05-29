<template>
  <div id="app">
    <div class="editor-ui">
      <v-app app>
        <editor-header-component ref="header" />
        <editor-drawer-component ref="drawer" v-model="drawerState" />
        <v-main app @click.native="pageClick" ref="main">
          <litegraph-editor-component v-if="state.currentEditorModule === EditorModuleEnum.GraphEditor" v-model="graphModel" />
          <media-manager-component v-if="state.currentEditorModule === EditorModuleEnum.MediaManager" />
        </v-main>
        <button class="drawer-toggle" :style="`left: ${contentOffset.x}px;`" @click.prevent.stop="drawerState = !drawerState">
          <v-icon color="white">
            mdi-chevron-{{ drawerState ? 'left' : 'right' }}
          </v-icon>
        </button>
        <v-footer v-if="state.currentEditorModule === EditorModuleEnum.PageEditor" ref="footer" app fixed inset elevation="4" color="white" class="app-footer">
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
import INodeModel from 'model/INodeModel';
import { StoreState, StoreTypes } from 'store';
import PageDocument from 'logic/model/page/PageDocument';
import EditorModuleEnum from 'model/EditorModules';

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

  public graphModel: string = '{"last_node_id": 48,"last_link_id": 52,"nodes": [{"id": 18,"type": "basic/time","pos": [27,58],"size": {"0": 140,"1": 46},"flags": {},"order": 1,"mode": 0,"outputs": [{"name": "in ms","type": "number","links": null},{"name": "in sec","type": "number","links": [25,28]}],"properties": {}},{"id": 36,"type": "basic/const","pos": [-1,228],"size": [180,30],"flags": {},"order": 0,"mode": 0,"outputs": [{"name": "value","type": "number","links": [24,27],"label": "3600.000"}],"properties": {"value": 3600}},{"id": 35,"type": "math/operation","pos": [209,62],"size": [100,60],"flags": {},"order": 5,"mode": 0,"inputs": [{"name": "A","type": "number,array,object","link": 25},{"name": "B","type": "number","link": 24}],"outputs": [{"name": "=","type": "number","links": [26]}],"properties": {"A": 2276.612799999997,"B": 3600,"OP": "/"}},{"id": 37,"type": "math/operation","pos": [220,170],"size": [100,60],"flags": {},"order": 6,"mode": 0,"inputs": [{"name": "A","type": "number,array,object","link": 28},{"name": "B","type": "number","link": 27}],"outputs": [{"name": "=","type": "number","links": [29,30]}],"properties": {"A": 2276.612799999997,"B": 3600,"OP": "%"}},{"id": 38,"type": "math/operation","pos": [355,136],"size": [100,60],"flags": {},"order": 8,"mode": 0,"inputs": [{"name": "A","type": "number,array,object","link": 29},{"name": "B","type": "number","link": 31}],"outputs": [{"name": "=","type": "number","links": [33]}],"properties": {"A": 2276.612799999997,"B": 60,"OP": "/"}},{"id": 39,"type": "math/operation","pos": [355,250],"size": [100,60],"flags": {},"order": 9,"mode": 0,"inputs": [{"name": "A","type": "number,array,object","link": 30},{"name": "B","type": "number","link": 32}],"outputs": [{"name": "=","type": "number","links": [35]}],"properties": {"A": 2276.612799999997,"B": 60,"OP": "%"}},{"id": 40,"type": "basic/const","pos": [111,304],"size": [180,30],"flags": {},"order": 2,"mode": 0,"outputs": [{"name": "value","type": "number","links": [31,32],"label": "60.000"}],"properties": {"value": 60}},{"id": 21,"type": "math/floor","pos": [356,61],"size": [80,30],"flags": {"collapsed": false},"order": 7,"mode": 0,"inputs": [{"name": "in","type": "number","link": 26}],"outputs": [{"name": "out","type": "number","links": [37]}],"properties": {}},{"id": 43,"type": "string/toString","pos": [466,60],"size": {"0": 140,"1": 26},"flags": {},"order": 10,"mode": 0,"inputs": [{"name": "a","type": 0,"link": 37}],"outputs": [{"name": "out","type": "String","links": [40]}],"properties": {}},{"id": 41,"type": "math/floor","pos": [475,139],"size": [80,30],"flags": {"collapsed": false},"order": 11,"mode": 0,"inputs": [{"name": "in","type": "number","link": 33}],"outputs": [{"name": "out","type": "number","links": [38]}],"properties": {}},{"id": 42,"type": "math/floor","pos": [474,251],"size": [80,30],"flags": {"collapsed": false},"order": 12,"mode": 0,"inputs": [{"name": "in","type": "number","link": 35}],"outputs": [{"name": "out","type": "number","links": [39]}],"properties": {}},{"id": 45,"type": "string/toString","pos": [581,260],"size": {"0": 140,"1": 26},"flags": {},"order": 15,"mode": 0,"inputs": [{"name": "a","type": 0,"link": 39}],"outputs": [{"name": "out","type": "String","links": [51]}],"properties": {}},{"id": 44,"type": "string/toString","pos": [574,136],"size": {"0": 140,"1": 26},"flags": {},"order": 14,"mode": 0,"inputs": [{"name": "a","type": 0,"link": 38}],"outputs": [{"name": "out","type": "String","links": [47]}],"properties": {}},{"id": 24,"type": "basic/string","pos": [30,473],"size": [180,30],"flags": {},"order": 3,"mode": 0,"outputs": [{"name": "","type": "string","links": [41,49]}],"properties": {"value": ":"}},{"id": 23,"type": "string/concatenate","pos": [251,416],"size": {"0": 140,"1": 46},"flags": {},"order": 13,"mode": 0,"inputs": [{"name": "a","type": "string","link": 40},{"name": "b","type": "string","link": 41}],"outputs": [{"name": "out","type": "string","links": [42]}],"properties": {}},{"id": 46,"type": "string/concatenate","pos": [424,390],"size": [140,46],"flags": {},"order": 16,"mode": 0,"inputs": [{"name": "a","type": "string","link": 42},{"name": "b","type": "string","link": 47}],"outputs": [{"name": "out","type": "string","links": [44]}],"properties": {}},{"id": 47,"type": "string/concatenate","pos": [577,461],"size": {"0": 140,"1": 46},"flags": {},"order": 17,"mode": 0,"inputs": [{"name": "a","type": "string","link": 44},{"name": "b","type": "string","link": 49}],"outputs": [{"name": "out","type": "string","links": [50]}],"properties": {}},{"id": 48,"type": "string/concatenate","pos": [743,344],"size": {"0": 140,"1": 46},"flags": {},"order": 18,"mode": 0,"inputs": [{"name": "a","type": "string","link": 50},{"name": "b","type": "string","link": 51}],"outputs": [{"name": "out","type": "string","links": [52]}],"properties": {}},{"id": 19,"type": "basic/console","pos": [844,505],"size": {"0": 140,"1": 46},"flags": {},"order": 19,"mode": 3,"inputs": [{"name": "log","type": -1,"link": 13},{"name": "msg","type": 0,"link": 52}],"properties": {"msg": "0:37:56"}},{"id": 20,"type": "events/timer","pos": [602,576],"size": {"0": 140,"1": 26},"flags": {},"order": 4,"mode": 0,"outputs": [{"name": "on_tick","type": -1,"links": [13]}],"properties": {"interval": 1000,"event": "tick"},"boxcolor": "#222"}],"links": [[13,20,0,19,0,-1],[24,36,0,35,1,"number"],[25,18,1,35,0,"number,array,object"],[26,35,0,21,0,"number"],[27,36,0,37,1,"number"],[28,18,1,37,0,"number,array,object"],[29,37,0,38,0,"number,array,object"],[30,37,0,39,0,"number,array,object"],[31,40,0,38,1,"number"],[32,40,0,39,1,"number"],[33,38,0,41,0,"number"],[35,39,0,42,0,"number"],[37,21,0,43,0,0],[38,41,0,44,0,0],[39,42,0,45,0,0],[40,43,0,23,0,"string"],[41,24,0,23,1,"string"],[42,23,0,46,0,"string"],[44,46,0,47,0,"string"],[47,44,0,46,1,"string"],[49,24,0,47,1,"string"],[50,47,0,48,0,"string"],[51,45,0,48,1,"string"],[52,48,0,19,1,0]],"groups": [],"config": {},"extra": {},"version": 0.4}';

  public contentOffset: { x: number, y: number } = { x: 0, y: 80 };
  
  public get breadcrumbsHeight(): number {
    return this.state.currentEditorModule === EditorModuleEnum.PageEditor && this.model
      ? this.pBreadcrumbsHeight
      : 0;
  }

  public get model(): PageDocument {
    return this.state.currentDocument;
  }

  public get drawerState(): boolean {
    return this.state.drawerState;
  }

  public set drawerState(val: boolean) {
    this.$store.commit(StoreTypes.mutations.SET_DRAWER_STATE, val);
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
          tag: 'article',
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
        {
          type: 4,
          id: '0-7',
          children: [
            {
              type: 3,
              id: '0-8',
              tag: 'div',
              children: [
                {
                  type: 5,
                  id: '0-11',
                  resourceUid: 'guid-07',
                  altText: 'Custom Alt',
                  title: 'TITLE #01',
                } as INodeModel,
              ],
            } as INodeModel,
            {
              type: 3,
              id: '0-9',
              tag: 'div',
              children: [
                {
                  type: 5,
                  id: '0-12',
                  resourceUid: 'guid-08',
                  title: 'TITLE #02',
                } as INodeModel,
              ],
            } as INodeModel,
            {
              type: 3,
              id: '0-10',
              tag: 'div',
              children: [
                {
                  type: 5,
                  id: '0-13',
                  resourceUid: 'guid-09',
                  title: 'TITLE #03',
                } as INodeModel,
              ],
            } as INodeModel,
          ],
        } as INodeModel,
        {
          type: 2,
          id: '0-6',
          text: 'Button text #1',
          action: 'http://ya.ru',
        } as INodeModel,
      ],
    } as INodeModel;

    const _nodeFactory = NodeFactory.getInstance();

    this.$store.commit(
      StoreTypes.mutations.SET_DOCUMENT,
      _nodeFactory.createNodeByType(obj.type)?.load(obj) ?? ({} as NodeBase)
    );

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

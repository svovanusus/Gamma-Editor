import Vue from 'vue';
import Vuex, { ActionTree, GetterTree, MutationTree, Store } from 'vuex';

import NodeBase from 'logic/model/page/NodeBase';
import ContainerNodeBase from 'logic/model/page/ContainerNodeBase';
import PageDocument from 'logic/model/page/PageDocument';
import DrawerTabEnum from 'model/DrawerTabs';
import EditorModuleEnum from 'model/EditorModules';

Vue.use(Vuex);

export type StoreState = {
  documents: PageDocument[];
  currentDocument: PageDocument | null;
  currentEditorModule: EditorModuleEnum;
  currentNode: NodeBase | null;
  drawerState: boolean;
  currentDrawerTab: DrawerTabEnum;
  nodesPanelActiveSectionName: string;
};

export const StoreTypes = {
  getters: {},
  mutations: {
    SET_DOCUMENT: 'SET_DOCUMENT',
    SET_CURRENT_NODE: 'SET_CURRENT_NODE',
    SET_DRAWER_ACTIVE_TAB: 'SET_DRAWER_ACTIVE_TAB',
    SET_NODES_PANEL_ACTIVE_SECTION_NAME: 'SET_NODES_PANEL_ACTIVE_SECTION_NAME',
    SET_DRAWER_STATE: 'SET_DRAWER_STATE',
  },
  actions: {
    SELECT_NODE: 'SELECT_NODE',
  },
};

const state: StoreState = {
  documents: [],
  currentDocument: null,
  currentEditorModule: EditorModuleEnum.PageEditor,
  currentNode: null,
  drawerState: true,
  currentDrawerTab: DrawerTabEnum.PROPS,
  nodesPanelActiveSectionName: null,
};

const getters: GetterTree<StoreState, StoreState> = {};

const mutations: MutationTree<StoreState> = {
  [StoreTypes.mutations.SET_DOCUMENT]: (state, document: PageDocument | null) =>
    (state.currentDocument = document),

  [StoreTypes.mutations.SET_CURRENT_NODE]: (state, currentNode: NodeBase | null) => {
    const newNode = findNode([ state.currentDocument ], currentNode?.id);
    state.currentNode = newNode;
  },

  [StoreTypes.mutations.SET_DRAWER_ACTIVE_TAB]: (state, drawerTab: DrawerTabEnum) =>
    (state.currentDrawerTab = drawerTab),
  
  [StoreTypes.mutations.SET_NODES_PANEL_ACTIVE_SECTION_NAME]: (state, sectionName: string) =>
    (state.nodesPanelActiveSectionName = sectionName),
  
  [StoreTypes.mutations.SET_DRAWER_STATE]: (state, drawerState: boolean) =>
    (state.drawerState = drawerState),
};

const actions: ActionTree<StoreState, StoreState> = {
  [StoreTypes.actions.SELECT_NODE]: (context, options: { node: NodeBase | null, isPropsOpen?: boolean }) => {
    options.isPropsOpen = options.isPropsOpen ?? true;
    context.commit(StoreTypes.mutations.SET_CURRENT_NODE, options.node);
    if (options.node != null && options.isPropsOpen) {
      context.commit(StoreTypes.mutations.SET_DRAWER_ACTIVE_TAB, DrawerTabEnum.PROPS);
    }
  },
};

function findNode(nodes: NodeBase[], id?: string): NodeBase {
  if (!id) return null;
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].id === id) return nodes[i];
    if (nodes[i] instanceof ContainerNodeBase) {
      const res = findNode((nodes[i] as ContainerNodeBase).children, id);
      if (res) return res;
    }
  }
  return null;
}

const store = new Store<StoreState>({
  state,
  getters,
  mutations,
  actions,
  devtools: true,
});

export default store;

import Vue from 'vue';
import Vuex, { ActionTree, GetterTree, MutationTree, Store } from 'vuex';

import NodeBase from 'logic/model/page/NodeBase';
import ContainerNodeBase from 'logic/model/page/ContainerNodeBase';
import PageDocument from 'logic/model/page/PageDocument';
import DrawerTabEnum from 'model/DrawerTabs';

Vue.use(Vuex);

export type StoreState = {
  document: PageDocument | null;
  currentNode: NodeBase | null;
  currentDrawerTab: DrawerTabEnum;
};

export const StoreTypes = {
  getters: {},
  mutations: {
    SET_DOCUMENT: 'SET_DOCUMENT',
    SET_CURRENT_NODE: 'SET_CURRENT_NODE',
    SET_DRAWER_ACTIVE_TAB: 'SET_DRAWER_ACTIVE_TAB',
  },
  actions: {
    SELECT_NODE: 'SELECT_NODE',
  },
};

const state: StoreState = {
  document: null,
  currentNode: null,
  currentDrawerTab: DrawerTabEnum.PROPS,
};

const getters: GetterTree<StoreState, StoreState> = {};

const mutations: MutationTree<StoreState> = {
  [StoreTypes.mutations.SET_DOCUMENT]: (state, document: PageDocument | null) =>
    (state.document = document),

  [StoreTypes.mutations.SET_CURRENT_NODE]: (state, currentNode: NodeBase | null) => {
    const newNode = findNode([ state.document ], currentNode?.id);
    state.currentNode = newNode;
  },

  [StoreTypes.mutations.SET_DRAWER_ACTIVE_TAB]: (state, drawerTab: DrawerTabEnum) =>
    (state.currentDrawerTab = drawerTab),
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

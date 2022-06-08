import Vue from 'vue';
import Vuex, { ActionTree, GetterTree, MutationTree, Store } from 'vuex';

import NodeBase from 'logic/model/page/NodeBase';
import ContainerNodeBase from 'logic/model/page/ContainerNodeBase';
import PageDocument from 'logic/model/page/PageDocument';
import DrawerTabEnum from 'model/DrawerTabs';
import EditorModuleEnum from 'model/EditorModules';
import NodeFactory from 'logic/model/NodeFactory';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';

Vue.use(Vuex);

export type StoreState = {
  siteId: string;
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
    ADD_DOCUMENT: 'ADD_DOCUMENT',
    SET_DOCUMENT: 'SET_DOCUMENT',
    REMOVE_DOCUMENT: 'REMOVE_DOCUMENT',
    SET_CURRENT_NODE: 'SET_CURRENT_NODE',
    SET_DRAWER_ACTIVE_TAB: 'SET_DRAWER_ACTIVE_TAB',
    SET_NODES_PANEL_ACTIVE_SECTION_NAME: 'SET_NODES_PANEL_ACTIVE_SECTION_NAME',
    SET_DRAWER_STATE: 'SET_DRAWER_STATE',
  },
  actions: {
    CREATE_DOCUMENT: 'CREATE_DOCUMENT',
    SELECT_DOCUMENT: 'SELECT_DOCUMENT',
    DELETE_DOCUMENT: 'DELETE_DOCUMENT',
    SELECT_NODE: 'SELECT_NODE',
  },
};

const state: StoreState = {
  siteId: '0',
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
  [StoreTypes.mutations.ADD_DOCUMENT]: (state, document: PageDocument) => {
    if (state.documents.some(x => x.id === document.id)) return;
    state.documents.push(document);
  },

  [StoreTypes.mutations.SET_DOCUMENT]: (state, documentId: string | null) => {
    state.documents.forEach(x => x.stylesheet.deactivate());
    const document = state.documents.find(x => x.id === documentId) ?? null;
    state.currentDocument = document;
    state.currentDocument?.stylesheet.activate();
  },

  [StoreTypes.mutations.REMOVE_DOCUMENT]: (state, documentId: string) => {
    const index = state.documents.findIndex(x => x.id === documentId);
    if (index < 0) return;

    state.documents.splice(index, 1);
  },

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
  [StoreTypes.actions.CREATE_DOCUMENT]: (context) => {
    let id = 0;
    let documentId = '';
    do {
      documentId = `id${++id}`;
    } while(context.state.documents.some(x => x.id === documentId));

    const _nodeFactory = NodeFactory.getInstance();
    const document = _nodeFactory.createNodeByType(NodeTypeEnum.PageDocumentNodeType).load({
      type: NodeTypeEnum.PageDocumentNodeType,
      id: documentId,
      title: `Page #${id}`,
      children: [],
    });

    context.commit(StoreTypes.mutations.ADD_DOCUMENT, document);
  },

  [StoreTypes.actions.SELECT_DOCUMENT]: (context, documentId: string | null) => {
    context.commit(StoreTypes.mutations.SET_DOCUMENT, documentId);
    context.commit(StoreTypes.mutations.SET_CURRENT_NODE, null);
  },

  [StoreTypes.actions.DELETE_DOCUMENT]: (context, documentId: string) => {
    context.commit(StoreTypes.mutations.REMOVE_DOCUMENT, documentId);
  },

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

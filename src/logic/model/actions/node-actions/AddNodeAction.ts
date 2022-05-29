import ContainerNodeBase from 'logic/model/page/ContainerNodeBase';
import NodeActionButtonBase from 'logic/model/actions/node-actions/NodeActionButtonBase';
import store, { StoreTypes } from 'store';
import DrawerTabEnum from 'model/DrawerTabs';

export default class AddNodeAction extends NodeActionButtonBase {
  public constructor(node: ContainerNodeBase) {
    super(node);
  }

  public get name(): string {
    return 'add-node-action';
  }

  public get icon(): string {
    return 'mdi-view-grid-plus';
  }

  public action(): void {
    store.commit(StoreTypes.mutations.SET_DRAWER_STATE, true);
    store.commit(StoreTypes.mutations.SET_DRAWER_ACTIVE_TAB, DrawerTabEnum.DOM);
    store.commit(StoreTypes.mutations.SET_NODES_PANEL_ACTIVE_SECTION_NAME, 'add-node-section');
  }
}
enum DrawerTabEnum {
  DOM = 'tab-dom',
  PROPS = 'tab-props',
  ADDING = 'tab-adding',
}

export default DrawerTabEnum;

interface TabDetails {
  icon: string;
  component: string;
}

export const TabsDetails = new Map<DrawerTabEnum, TabDetails>([
  [DrawerTabEnum.DOM, { icon: 'mdi-file-tree', component: 'DomTreeComponent' }],
  [DrawerTabEnum.PROPS, { icon: 'mdi-cog', component: 'SettingsPanelComponent' }],
  [DrawerTabEnum.ADDING, { icon: 'mdi-view-grid-plus', component: 'AddNodePanelComponent' }],
]);

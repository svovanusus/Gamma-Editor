enum DrawerTabEnum {
  COMMON = 'tab-common',
  PROPS = 'tab-props',
  DOM = 'tab-dom',
}

export default DrawerTabEnum;

interface TabDetails {
  icon: string;
  component: string;
}

export const TabsDetails = new Map<DrawerTabEnum, TabDetails>([
  [DrawerTabEnum.COMMON, { icon: 'mdi-menu', component: 'CommonPanelComponent' }],
  [DrawerTabEnum.PROPS, { icon: 'mdi-cog', component: 'SettingsPanelComponent' }],
  [DrawerTabEnum.DOM, { icon: 'mdi-file-tree', component: 'NodesPannelComponent' }],
]);

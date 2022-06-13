import Vue, { PluginObject } from 'vue';

import SimpleContainerNodeComponent from 'components/page/Containers/SimpleContainerNodeComponent.vue';
import ButtonNodeComponent from 'components/page/Nodes/ButtonNodeComponent.vue';
import TextNodeComponent from 'components/page/Nodes/TextNodeComponent.vue';
import PageDocumentComponent from 'components/page/PageDocumentComponent.vue';
import ColumnsContainerNodeComponent from 'components/page/Containers/ColumnsContainerNodeComponent.vue';
import ImageNodeComponent from 'components/page/Nodes/ImageNodeComponent.vue';

import TextFieldSettingsComponent from 'components/ui/drawer-tabs/settings/parts/TextFieldSettingsComponent.vue';
import SelectSettingComponent from 'components/ui/drawer-tabs/settings/parts/SelectSettingComponent.vue';
import ResourceSelectorSettingComponent from 'components/ui/drawer-tabs/settings/parts/ResourceSelectorSettingComponent.vue';
import BackgroundSettingsComponent from 'components/ui/drawer-tabs/settings/parts/BackgroundSettingsComponent.vue';
import BoxSpacingSettingsComponent from 'components/ui/drawer-tabs/settings/parts/BoxSpacingSettingsComponent.vue';
import ColorSettingComponent from 'components/ui/drawer-tabs/settings/parts/ColorSettingComponent.vue';
import CssMeasureSettingComponent from 'components/ui/drawer-tabs/settings/parts/CssMeasureSettingComponent.vue';
import SwitchSettingComponent from 'components/ui/drawer-tabs/settings/parts/SwitchSettingComponent.vue';

import NodeActionButtonComponent from 'components/ui/actions/node-actions/NodeActionButtonComponent.vue';
import LabelNodeActionComponent from 'components/ui/actions/node-actions/LabelNodeActionComponent.vue';
import SelectResourceNodeActionComponent from 'components/ui/actions/node-actions/SelectResourceNodeActionComponent.vue';

interface Options {}

export default <PluginObject<Options>><unknown>{
  install(app: typeof Vue, options: Options): void {
    // PAGE NODES
    app.component(
      SimpleContainerNodeComponent.name,
      SimpleContainerNodeComponent
    );
    app.component(ButtonNodeComponent.name, ButtonNodeComponent);
    app.component(TextNodeComponent.name, TextNodeComponent);
    app.component(PageDocumentComponent.name, PageDocumentComponent);
    app.component(ColumnsContainerNodeComponent.name, ColumnsContainerNodeComponent);
    app.component(ImageNodeComponent.name, ImageNodeComponent);

    // SETTINGS PARTS
    app.component(TextFieldSettingsComponent.name, TextFieldSettingsComponent);
    app.component(SelectSettingComponent.name, SelectSettingComponent);
    app.component(ResourceSelectorSettingComponent.name, ResourceSelectorSettingComponent);
    app.component(BackgroundSettingsComponent.name, BackgroundSettingsComponent);
    app.component(BoxSpacingSettingsComponent.name, BoxSpacingSettingsComponent);
    app.component(ColorSettingComponent.name, ColorSettingComponent);
    app.component(CssMeasureSettingComponent.name, CssMeasureSettingComponent);
    app.component(SwitchSettingComponent.name, SwitchSettingComponent);

    // NODES ACTIONS
    app.component(NodeActionButtonComponent.name, NodeActionButtonComponent);
    app.component(LabelNodeActionComponent.name, LabelNodeActionComponent);
    app.component(SelectResourceNodeActionComponent.name, SelectResourceNodeActionComponent);
  },
};

import Vue, { PluginObject } from 'vue';

import SimpleContainerNodeComponent from 'components/page/Containers/SimpleContainerNodeComponent.vue';
import ButtonNodeComponent from 'components/page/Nodes/ButtonNodeComponent.vue';
import TextNodeComponent from 'components/page/Nodes/TextNodeComponent.vue';
import PageDocumentComponent from 'components/page/PageDocumentComponent.vue';
import ColumnsContainerNodeComponent from 'components/page/Containers/ColumnsContainerNodeComponent.vue';

import TextFieldSettingsComponent from 'components/ui/settings/parts/TextFieldSettingsComponent.vue';
import SelectSettingComponent from 'components/ui/settings/parts/SelectSettingComponent.vue';

import NodeActionButtonComponent from 'components/ui/actions/node-actions/NodeActionButtonComponent.vue';

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

    // SETTINGS PARTS
    app.component(TextFieldSettingsComponent.name, TextFieldSettingsComponent);
    app.component(SelectSettingComponent.name, SelectSettingComponent);

    // NODES ACTIONS
    app.component(NodeActionButtonComponent.name, NodeActionButtonComponent);
  },
};

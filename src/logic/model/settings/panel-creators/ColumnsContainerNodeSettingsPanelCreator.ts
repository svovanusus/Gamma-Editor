import ColumnsContainerNode from 'logic/model/page/Containers/ColumnsContainerNode';
import TextFieldSetting from 'logic/model/settings/parts/TextFieldSetting';
import SettingsPanel from 'logic/model/settings/SettingsPanel';
import SettingsPanelCreator from 'logic/model/settings/SettingsPanelCreator';

export default class ColumnsContainerNodeSettingsPanelCreator extends SettingsPanelCreator<ColumnsContainerNode> {
  createPanel(model: ColumnsContainerNode): SettingsPanel<ColumnsContainerNode> {
    return SettingsPanel.create(model)
      .addPart(new TextFieldSetting(model, 'name'))
      .addPart(new TextFieldSetting(model, 'gap'))
      .addPart(new TextFieldSetting(model, 'notes'));
  }
}
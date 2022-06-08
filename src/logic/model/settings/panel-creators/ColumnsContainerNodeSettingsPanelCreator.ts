import ColumnsContainerNode from 'logic/model/page/Containers/ColumnsContainerNode';
import TextFieldSetting from 'logic/model/settings/parts/TextFieldSetting';
import SettingsPanel from 'logic/model/settings/SettingsPanel';
import SettingsPanelCreator from 'logic/model/settings/SettingsPanelCreator';
import BackgroundSettings from '../parts/BackgroundSettings';

export default class ColumnsContainerNodeSettingsPanelCreator extends SettingsPanelCreator<ColumnsContainerNode> {
  createPanel(model: ColumnsContainerNode): SettingsPanel<ColumnsContainerNode> {
    return SettingsPanel.create(model)
      .addPart(new TextFieldSetting(model, 'gap'))
      .addPart(new BackgroundSettings(model, 'background', 'Background'))
      .addPart(new TextFieldSetting(model, 'notes'));
  }
}
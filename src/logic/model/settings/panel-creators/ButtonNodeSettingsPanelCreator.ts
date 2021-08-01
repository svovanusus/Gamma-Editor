import ButtonNode from 'logic/model/page/Nodes/ButtonNode';
import TextFieldSetting from 'logic/model/settings/parts/TextFieldSetting';
import SettingsPanel from 'logic/model/settings/SettingsPanel';
import SettingsPanelCreator from 'logic/model/settings/SettingsPanelCreator';

export default class ButtonNodeSettingsPanelCreator extends SettingsPanelCreator<ButtonNode> {
  createPanel(model: ButtonNode): SettingsPanel<ButtonNode> {
    return SettingsPanel.create(model)
      .addPart(new TextFieldSetting(model, 'name'))
      .addPart(new TextFieldSetting(model, 'text'))
      .addPart(new TextFieldSetting(model, 'action'))
      .addPart(new TextFieldSetting(model, 'notes'));
  }
}

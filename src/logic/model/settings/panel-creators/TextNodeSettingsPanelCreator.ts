import TextNode from 'logic/model/page/Nodes/TextNode';
import TextFieldSetting from 'logic/model/settings/parts/TextFieldSetting';
import SettingsPanel from 'logic/model/settings/SettingsPanel';
import SettingsPanelCreator from 'logic/model/settings/SettingsPanelCreator';

export default class TextNodeSettingsPanelCreator extends SettingsPanelCreator<TextNode> {
  createPanel(model: TextNode): SettingsPanel<TextNode> {
    return SettingsPanel.create(model)
      .addPart(new TextFieldSetting(model, 'name'))
      .addPart(new TextFieldSetting(model, 'text'))
      .addPart(new TextFieldSetting(model, 'notes'));
  }
}

import SimpleContainerNode from 'logic/model/page/Containers/SimpleContainerNode';
import TextFieldSetting from 'logic/model/settings/parts/TextFieldSetting';
import SettingsPanel from 'logic/model/settings/SettingsPanel';
import SettingsPanelCreator from 'logic/model/settings/SettingsPanelCreator';

export default class SimpleContainerNodeSettingsPanelCreator extends SettingsPanelCreator<SimpleContainerNode> {
  createPanel(model: SimpleContainerNode): SettingsPanel<SimpleContainerNode> {
    return SettingsPanel.create(model)
      .addPart(new TextFieldSetting(model, 'name'))
      .addPart(new TextFieldSetting(model, 'tag'))
      .addPart(new TextFieldSetting(model, 'notes'));
  }
}

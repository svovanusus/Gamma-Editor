import PageDocument from 'logic/model/page/PageDocument';
import TextFieldSetting from 'logic/model/settings/parts/TextFieldSetting';
import SettingsPanel from 'logic/model/settings/SettingsPanel';
import SettingsPanelCreator from 'logic/model/settings/SettingsPanelCreator';

export default class PageDocumentSettingsPanelCreator extends SettingsPanelCreator<PageDocument> {
  public createPanel(model: PageDocument): SettingsPanel<PageDocument> {
    return SettingsPanel.create(model)
      .addPart(new TextFieldSetting(model, 'title'))
      .addPart(new TextFieldSetting(model, 'notes'));
  }
}

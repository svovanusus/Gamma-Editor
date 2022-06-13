import ColumnsContainerNode from 'logic/model/page/Containers/ColumnsContainerNode';
import TextFieldSetting from 'logic/model/settings/parts/TextFieldSetting';
import SettingsPanel from 'logic/model/settings/SettingsPanel';
import SettingsPanelCreator from 'logic/model/settings/SettingsPanelCreator';
import BackgroundSettings from '../parts/BackgroundSettings';
import BoxSpacingSettings from '../parts/BoxSpacingSettings';

export default class ColumnsContainerNodeSettingsPanelCreator extends SettingsPanelCreator<ColumnsContainerNode> {
  createPanel(model: ColumnsContainerNode): SettingsPanel<ColumnsContainerNode> {
    return SettingsPanel.create(model)
      .addPart(new TextFieldSetting(model, 'gap'))
      .addPart(new BackgroundSettings(model, 'background', 'Background'))
      .addPart(new BoxSpacingSettings(model, 'margins', 'Margins'))
      .addPart(new BoxSpacingSettings(model, 'paddings', 'Paddings'))
      .addPart(new TextFieldSetting(model, 'notes').withMultiLine(2));
  }
}
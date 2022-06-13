import TextNode from 'logic/model/page/Nodes/TextNode';
import FontWeightType from 'logic/model/page/settings/FontWeightType';
import TextFieldSetting from 'logic/model/settings/parts/TextFieldSetting';
import SettingsPanel from 'logic/model/settings/SettingsPanel';
import SettingsPanelCreator from 'logic/model/settings/SettingsPanelCreator';
import SelectOptionsHelper from 'utils/SelectOptionsHelper';
import BoxSpacingSettings from '../parts/BoxSpacingSettings';
import ColorSetting from '../parts/ColorSetting';
import CssMeasureSetting from '../parts/CssMeasureSetting';
import SelectSetting from '../parts/SelectSetting';

export default class TextNodeSettingsPanelCreator extends SettingsPanelCreator<TextNode> {
  createPanel(model: TextNode): SettingsPanel<TextNode> {
    return SettingsPanel.create(model)
      .addPart(new TextFieldSetting(model, 'text').withMultiLine())
      .addPart(new CssMeasureSetting(model, 'fontSize'))
      .addPart(new SelectSetting(model, 'fontWeight', 'Font Weight', SelectOptionsHelper.generateSelectOptionsForEnum<FontWeightType>(FontWeightType)))
      .addPart(new ColorSetting(model, 'color'))
      .addPart(new BoxSpacingSettings(model, 'margins', 'Margins'))
      .addPart(new BoxSpacingSettings(model, 'paddings', 'Paddings'))
      .addPart(new TextFieldSetting(model, 'notes').withMultiLine(2));
  }
}

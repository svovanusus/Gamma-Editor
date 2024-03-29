import ImageNode from 'logic/model/page/Nodes/ImageNode';
import SettingsPanelCreator from 'logic/model/settings/SettingsPanelCreator';
import TextFieldSetting from 'logic/model/settings/parts/TextFieldSetting';
import SettingsPanel from 'logic/model/settings/SettingsPanel';
import ResourceSelectorSetting from '../parts/ResourceSelectorSetting';
import BoxSpacingSettings from '../parts/BoxSpacingSettings';

export default class ImageNodeSettingsPanelCreator extends SettingsPanelCreator<ImageNode> {
  public createPanel(model: ImageNode): SettingsPanel<ImageNode> {
    return SettingsPanel.create(model)
      .addPart(new ResourceSelectorSetting(model, 'resourceUid', 'Resource'))
      .addPart(new TextFieldSetting(model, 'title'))
      .addPart(new TextFieldSetting(model, 'altText'))
      .addPart(new BoxSpacingSettings(model, 'margins', 'Margins'))
      .addPart(new BoxSpacingSettings(model, 'paddings', 'Paddings'))
      .addPart(new TextFieldSetting(model, 'notes').withMultiLine(2));
  }
}
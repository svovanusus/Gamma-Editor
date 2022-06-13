import SimpleContainerNode from 'logic/model/page/Containers/SimpleContainerNode';
import TextFieldSetting from 'logic/model/settings/parts/TextFieldSetting';
import SettingsPanel from 'logic/model/settings/SettingsPanel';
import SettingsPanelCreator from 'logic/model/settings/SettingsPanelCreator';
import SelectSetting from 'logic/model/settings/parts/SelectSetting';
import ContainerTagType from 'logic/model/page/ContainerTagType';
import SelectOptionsHelper from 'utils/SelectOptionsHelper';
import BackgroundSettings from '../parts/BackgroundSettings';
import BoxSpacingSettings from '../parts/BoxSpacingSettings';
import SwitchSetting from '../parts/SwitchSetting';
import CssMeasureSetting from '../parts/CssMeasureSetting';

export default class SimpleContainerNodeSettingsPanelCreator extends SettingsPanelCreator<SimpleContainerNode> {
  createPanel(model: SimpleContainerNode): SettingsPanel<SimpleContainerNode> {
    return SettingsPanel.create(model)
      .addPart(new SelectSetting(model, 'tag', 'Tag', SelectOptionsHelper.generateSelectOptionsForEnum<ContainerTagType>(ContainerTagType)))
      .addPart(new SwitchSetting(model, 'useFixedWidth'))
      .addPart(new CssMeasureSetting(model, 'width').withVisibilityFunction(m => m.useFixedWidth))
      .addPart(new SwitchSetting(model, 'useFixedHeight'))
      .addPart(new CssMeasureSetting(model, 'height').withVisibilityFunction(m => m.useFixedHeight))
      .addPart(new BackgroundSettings(model, 'background', 'Background'))
      .addPart(new BoxSpacingSettings(model, 'margins', 'Margins'))
      .addPart(new BoxSpacingSettings(model, 'paddings', 'Paddings'))
      .addPart(new TextFieldSetting(model, 'notes').withMultiLine(2));
  }
}

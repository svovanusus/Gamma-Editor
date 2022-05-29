import SimpleContainerNode from 'logic/model/page/Containers/SimpleContainerNode';
import TextFieldSetting from 'logic/model/settings/parts/TextFieldSetting';
import SettingsPanel from 'logic/model/settings/SettingsPanel';
import SettingsPanelCreator from 'logic/model/settings/SettingsPanelCreator';
import SelectSetting from 'logic/model/settings/parts/SelectSetting';
import ContainerTagType from 'logic/model/page/ContainerTagType';
import SelectOptionsHelper from 'utils/SelectOptionsHelper';
import BackgroundSettings from '../parts/BackgroundSettings';

export default class SimpleContainerNodeSettingsPanelCreator extends SettingsPanelCreator<SimpleContainerNode> {
  createPanel(model: SimpleContainerNode): SettingsPanel<SimpleContainerNode> {
    return SettingsPanel.create(model)
      .addPart(new SelectSetting(model, 'tag', 'Tag', SelectOptionsHelper.generateSelectOptionsForEnum<ContainerTagType>(ContainerTagType)))
      .addPart(new BackgroundSettings(model, 'backgound', 'Background'))
      .addPart(new TextFieldSetting(model, 'notes'));
  }
}

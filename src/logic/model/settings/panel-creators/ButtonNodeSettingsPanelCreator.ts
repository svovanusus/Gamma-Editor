import ButtonNode from 'logic/model/page/Nodes/ButtonNode';
import ButtonActionTypeEnum from 'logic/model/page/settings/ButtonActionTypeEnum';
import ButtonLinkTypeEnum from 'logic/model/page/settings/ButtonLinkTypeEnum';
import TextFieldSetting from 'logic/model/settings/parts/TextFieldSetting';
import SettingsPanel from 'logic/model/settings/SettingsPanel';
import SettingsPanelCreator from 'logic/model/settings/SettingsPanelCreator';
import SelectOptionsHelper from 'utils/SelectOptionsHelper';
import SelectSetting from '../parts/SelectSetting';

export default class ButtonNodeSettingsPanelCreator extends SettingsPanelCreator<ButtonNode> {
  createPanel(model: ButtonNode): SettingsPanel<ButtonNode> {
//pageId
    return SettingsPanel.create(model)
      .addPart(new TextFieldSetting(model, 'text'))
      .addPart(new TextFieldSetting(model, 'title'))
      .addPart(new SelectSetting(model, 'actionType', 'Action Type', SelectOptionsHelper.generateSelectOptionsForEnum<ButtonActionTypeEnum>(ButtonActionTypeEnum)))
      .addPart(new SelectSetting(model, 'linkType', 'Link Type', SelectOptionsHelper.generateSelectOptionsForEnum<ButtonLinkTypeEnum>(ButtonLinkTypeEnum))
        .withVisibilityFunction(m => m.actionType === ButtonActionTypeEnum.Link))
      .addPart(new TextFieldSetting(model, 'linkText').withVisibilityFunction(m => m.actionType === ButtonActionTypeEnum.Link && m.linkType === ButtonLinkTypeEnum.ExternalLink))
      .addPart(new TextFieldSetting(model, 'anchorName').withVisibilityFunction(m => m.actionType === ButtonActionTypeEnum.Link && m.linkType === ButtonLinkTypeEnum.Anchor))
      .addPart(new TextFieldSetting(model, 'graphEventName').withVisibilityFunction(m => m.actionType === ButtonActionTypeEnum.GraphEvent))
      .addPart(new TextFieldSetting(model, 'actionScript').withVisibilityFunction(m => m.actionType === ButtonActionTypeEnum.Script))
      .addPart(new TextFieldSetting(model, 'notes'));
  }
}

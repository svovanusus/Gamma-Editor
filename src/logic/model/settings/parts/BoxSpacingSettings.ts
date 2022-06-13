import NodeBase from 'logic/model/page/NodeBase';
import BoxSpacingSettingsModel from 'logic/model/page/settings/BoxSpacingSettingsModel';
import SettingBase from 'logic/model/settings/parts/SettingBase';

export default class BoxSpacingSettings<TModel extends NodeBase, TField extends BoxSpacingSettingsModel> extends SettingBase<TModel, TField> {
  public constructor(model: TModel, fieldName: keyof TModel, label?: string) {
    super('BoxSpacingSettingsComponent', model, fieldName, label);
  }
}
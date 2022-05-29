import NodeBase from 'logic/model/page/NodeBase';
import BackgroundSettingsModel from 'logic/model/page/settings/BackgroundSettingsModel';
import SettingBase from 'logic/model/settings/parts/SettingBase';

export default class BackgroundSettings<TModel extends NodeBase, TField extends BackgroundSettingsModel> extends SettingBase<TModel, TField> {
  public constructor(model: TModel, fieldName: keyof TModel, label?: string) {
    super('BackgroundSettingsComponent', model, fieldName, label);
  }
}
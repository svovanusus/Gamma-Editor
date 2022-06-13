import NodeBase from 'logic/model/page/NodeBase';
import SettingBase from 'logic/model/settings/parts/SettingBase';

export default class ColorSetting<
  TModel extends NodeBase,
  TField = string
> extends SettingBase<TModel, TField> {
  public constructor(model: TModel, fieldName: keyof TModel, label?: string) {
    super('ColorSettingComponent', model, fieldName, label);
  }
}

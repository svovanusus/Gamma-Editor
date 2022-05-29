import NodeBase from 'logic/model/page/NodeBase';
import SettingBase from 'logic/model/settings/parts/SettingBase';

export default class ResourceSelectorSetting<
  TModel extends NodeBase,
  TField = string,
> extends SettingBase<TModel, TField> {
  public constructor(
    model: TModel,
    fieldName: keyof TModel,
    label?: string,
  ) {
    super('ResourceSelectorSettingComponent', model, fieldName, label);
  }
}
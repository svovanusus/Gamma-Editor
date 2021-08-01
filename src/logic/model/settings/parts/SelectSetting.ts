import NodeBase from 'logic/model/page/NodeBase';
import SettingBase from 'logic/model/settings/parts/SettingBase';

export default class SelectSetting<
  TModel extends NodeBase,
  TItem
> extends SettingBase<TModel, TItem> {
  public items: TItem[];

  public constructor(
    model: TModel,
    fieldName: keyof TModel,
    label?: string,
    items: TItem[] = [],
  ) {
    super('SelectSettingComponent', model, fieldName, label);
    this.items = items;
  }
}

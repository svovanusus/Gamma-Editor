import NodeBase from 'logic/model/page/NodeBase';
import SettingBase from 'logic/model/settings/parts/SettingBase';

export default class SwitchSetting<TModel extends NodeBase, TField = boolean> extends SettingBase<TModel, TField> {
  public constructor(model: TModel, fieldName: keyof TModel, label?: string) {
    super('SwitchSettingComponent', model, fieldName, label);
  }
}

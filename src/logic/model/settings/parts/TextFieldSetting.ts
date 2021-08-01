import NodeBase from 'logic/model/page/NodeBase';
import SettingBase from 'logic/model/settings/parts/SettingBase';

export default class TextFieldSetting<
  TModel extends NodeBase,
  TField = string
> extends SettingBase<TModel, TField> {
  public textFieldType: string;

  public constructor(
    model: TModel,
    fieldName: keyof TModel,
    label?: string,
    textFieldType = 'text'
  ) {
    super('TextFieldSettingComponent', model, fieldName, label);
    this.textFieldType = textFieldType;
  }
}

import NodeBase from 'logic/model/page/NodeBase';
import SettingBase from 'logic/model/settings/parts/SettingBase';

export default class TextFieldSetting<
  TModel extends NodeBase,
  TField = string
> extends SettingBase<TModel, TField> {
  public textFieldType: string;
  public isMultiLine: boolean;
  public rows: number;

  public constructor(
    model: TModel,
    fieldName: keyof TModel,
    label?: string,
    textFieldType = 'text'
  ) {
    super('TextFieldSettingComponent', model, fieldName, label);
    this.textFieldType = textFieldType;
    this.isMultiLine = false;
    this.rows = 0;
  }

  public withMultiLine(rows: number = 5): TextFieldSetting<TModel, TField> {
    this.isMultiLine = true;
    this.rows = rows;
    return this;
  }
}

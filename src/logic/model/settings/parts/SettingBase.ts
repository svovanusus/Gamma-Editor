import NodeBase from 'logic/model/page/NodeBase';

export default class SettingBase<TModel extends NodeBase, TField = unknown> {
  public readonly componentName: string;

  protected readonly model: TModel;
  protected readonly fieldName: keyof TModel;
  protected readonly label?: string;

  protected constructor(
    componentName: string,
    model: TModel,
    fieldName: keyof TModel,
    label?: string
  ) {
    this.componentName = componentName;
    this.model = model;
    this.fieldName = fieldName;
    this.label = label;
  }

  public get value(): TField {
    return this.model[this.fieldName] as unknown as TField;
  }

  public set value(val: TField) {
    (this.model[this.fieldName] as unknown as TField) = val;
  }

  public get name() {
    return (
      this.label ??
      this.fieldName
        .toString()
        .replace(
          /(?<=[A-Z])(?=[A-Z][a-z])|(?<=[^A-Z])(?=[A-Z])|(?<=[A-Za-z])(?=[^A-Za-z])/g,
          ' '
        )
        .toLowerCase()
        .replace(/\b\w/g, (c) => c.toUpperCase())
    );
  }
}

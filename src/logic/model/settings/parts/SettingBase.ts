import NodeBase from 'logic/model/page/NodeBase';

type VisibilityFunction<TModel> = (model: TModel) => boolean;

export default class SettingBase<TModel extends NodeBase, TField = unknown> {
  public readonly componentName: string;

  protected readonly model: TModel;
  protected readonly fieldName: keyof TModel;
  protected readonly label?: string;

  private visibilityFunction: VisibilityFunction<TModel>;

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
    this.visibilityFunction = () => true;
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

  public get isVisible(): boolean {
    if (!this.visibilityFunction) return true;
    return this.visibilityFunction(this.model);
  }

  public withVisibilityFunction(func: VisibilityFunction<TModel>): SettingBase<TModel, TField> {
    this.visibilityFunction = func;
    return this;
  }
}

export default class SelectOption<TValue> {
  public readonly label: string;
  public readonly value: TValue;

  public constructor(label: string, value: TValue) {
    this.label = label;
    this.value = value;
  }
}
import SelectOption from "model/SelectOption";

export default class SelectOptionsHelper {
  private constructor() {}

  public static generateSelectOptionsForEnum<TValue>(enum1: { [key: string]: string|number }): SelectOption<TValue>[] {
    return Object.keys(enum1).map(key =>
      new SelectOption(key.replace(/(?<=[A-Z])(?=[A-Z][a-z])|(?<=[^A-Z])(?=[A-Z])|(?<=[A-Za-z])(?=[^A-Za-z])/g, x => ' ' + x).trim(), enum1[key] as unknown as TValue));
  }
}
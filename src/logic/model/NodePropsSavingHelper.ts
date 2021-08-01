export default class NodePropsSavingHelper {
  private constructor() {}

  public static save<T>(val: T, defaultVal: T): T | undefined {
    return JSON.stringify(val) !== JSON.stringify(defaultVal) ? val : undefined;
  }

  public static get<T>(val: T | undefined, defaultVal: T): T {
    return val ?? defaultVal;
  }
}

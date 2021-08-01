export default class ServiceLocator {
  private constructor() {}

  public static getInstance(): ServiceLocator {
    if (!this.instance) this.instance = new ServiceLocator();
    return this.instance;
  }

  public addService<T>(id: string, resolver: () => T) {
    this.serviceMap.set(id, resolver);
  }

  public getService<T>(id: string): T {
    const resolver = this.serviceMap.get(id);
    if (resolver) {
      return resolver();
    }

    return null;
  }

  private serviceMap = new Map<any, () => any>();

  private static instance: ServiceLocator = null;
}
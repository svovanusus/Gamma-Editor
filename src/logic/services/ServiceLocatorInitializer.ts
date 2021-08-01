import INodeFactory from 'logic/model/INodeFactory';
import NodeFactory from 'logic/model/NodeFactory';
import ServiceLocator from 'logic/services/ServiceLocator';

export default class ServiceLocatorInitializer {
  private constructor() {}

  public static initialize() {
    const locator = ServiceLocator.getInstance();

    locator.addService<INodeFactory>('NodeFactory', NodeFactory.getInstance);
  }
}
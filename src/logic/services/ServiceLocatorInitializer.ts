import INodeFactory from 'logic/model/INodeFactory';
import NodeFactory from 'logic/model/NodeFactory';
import ServiceLocator from 'logic/services/ServiceLocator';
import IMediaManagerService from 'logic/services/IMediaManagerService';
import MediaManagerService from 'logic/services/MediaManagerService';

export default class ServiceLocatorInitializer {
  private constructor() {}

  public static initialize() {
    const locator = ServiceLocator.getInstance();

    locator.addService<INodeFactory>('NodeFactory', NodeFactory.getInstance);
    locator.addService<IMediaManagerService>('MediaManagerService', MediaManagerService.getInstance);
  }
}
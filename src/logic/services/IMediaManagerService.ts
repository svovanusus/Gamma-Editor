import IMediaResource from 'logic/model/IMediaResource';
import MediaResource from 'logic/model/MediaResource';

export default interface IMadiaManagerService {
  loadResources(): Promise<void>;
  getResources(): MediaResource[];
  setResources(resources: MediaResource[]): void;
  getResource(resourceUid: string): MediaResource;
  getResourceUrl(resourceUid: string): string;
  addResource(resourceObj: IMediaResource): MediaResource;
  deleteResource(resourceUid: string): MediaResource;
  deleteResourceRange(resourceUids: string[]): void;
}
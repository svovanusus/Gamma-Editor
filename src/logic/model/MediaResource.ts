import IMediaResource from 'logic/model/IMediaResource';

export default class MediaResource implements IMediaResource {
  public readonly resourceUid: string;
  public readonly width: number;
  public readonly height: number;
  public readonly url: string;
  public readonly size: number;
  public name: string;
  public defaultAlt: string;
  public description: string;

  public constructor(resourceObj: IMediaResource) {
    this.resourceUid = resourceObj.resourceUid;
    this.width = resourceObj.width;
    this.height = resourceObj.height;
    this.url = resourceObj.url;
    this.size = resourceObj.size;
    this.name = resourceObj.name;
    this.defaultAlt = resourceObj.defaultAlt;
    this.description = resourceObj.description;
  }
}
import IMediaResource from 'logic/model/IMediaResource';
import MediaResource from 'logic/model/MediaResource';
import IMadiaManagerService from 'logic/services/IMediaManagerService';

export default class MediaManagerService implements IMadiaManagerService {
  private constructor() {}

  public static getInstance(): MediaManagerService {
    if (!MediaManagerService.instance) {
      MediaManagerService.instance = new MediaManagerService();
      MediaManagerService.instance.loadResources();
    }
    return MediaManagerService.instance;
  }

  public async loadResources(): Promise<void> {
    this.resources = [
      new MediaResource({
        resourceUid: 'guid-01',
        name: 'img1.jpg',
        url: '/src/assets/img/img1.jpg',
        size: 153,
        defaultAlt: '',
        width: 1920,
        height: 1080,
        description: 'The First Image',
      }),
      new MediaResource({
        resourceUid: 'guid-02',
        name: 'img2.jpg',
        url: '/src/assets/img/img2.jpg',
        size: 163745,
        defaultAlt: 'alt two',
        width: 1920,
        height: 1080,
        description: 'Two',
      }),
      new MediaResource({
        resourceUid: 'guid-03',
        name: 'img3.jpg',
        url: '/src/assets/img/img3.jpg',
        size: 1863462,
        defaultAlt: '',
        width: 1920,
        height: 1200,
        description: 'Three',
      }),
      new MediaResource({
        resourceUid: 'guid-04',
        name: 'img4.jpg',
        url: '/src/assets/img/img4.jpg',
        size: 173643,
        defaultAlt: 'alt four',
        width: 1920,
        height: 1200,
        description: 'Four',
      }),
      new MediaResource({
        resourceUid: 'guid-05',
        name: 'img5.jpg',
        url: '/src/assets/img/img5.jpg',
        size: 7345276,
        defaultAlt: '',
        width: 1920,
        height: 1200,
        description: '',
      }),
      new MediaResource({
        resourceUid: 'guid-06',
        name: 'img6.jpg',
        url: '/src/assets/img/img6.jpg',
        size: 184583,
        defaultAlt: '',
        width: 1920,
        height: 1440,
        description: '',
      }),
      new MediaResource({
        resourceUid: 'guid-07',
        name: 'img7.jpg',
        url: '/src/assets/img/img7.jpg',
        size: 17384,
        defaultAlt: '',
        width: 1920,
        height: 1080,
        description: '',
      }),
      new MediaResource({
        resourceUid: 'guid-08',
        name: 'img8.jpg',
        url: '/src/assets/img/img8.jpg',
        size: 837456,
        defaultAlt: '',
        width: 1920,
        height: 1080,
        description: '',
      }),
      new MediaResource({
        resourceUid: 'guid-09',
        name: 'img9.jpg',
        url: '/src/assets/img/img9.jpg',
        size: 623462,
        defaultAlt: '',
        width: 1920,
        height: 1080,
        description: '',
      }),
      new MediaResource({
        resourceUid: 'guid-10',
        name: 'img10.jpg',
        url: '/src/assets/img/img10.jpg',
        size: 17734733,
        defaultAlt: '',
        width: 1920,
        height: 1080,
        description: '',
      }),
    ];
  }

  public getResources(): MediaResource[] {
    return this.resources.map(x => x);
  }

  public setResources(resources: MediaResource[]): void {
    this.resources = resources.map(x => x);
  }

  public getResource(resourceUid: string): MediaResource {
    return this.resources.find(x => x.resourceUid === resourceUid) ?? null;
  }

  public getResourceUrl(resourceUid: string): string {
    return this.getResource(resourceUid)?.url ?? '#';
  }

  public addResource(resourceObj: IMediaResource): MediaResource {
    const resource = new MediaResource(resourceObj);
    this.resources.push(resource);
    return resource;
  }

  public deleteResource(resourceUid: string): MediaResource {
    const resource = this.getResource(resourceUid);
    if (resource) {
      this.resources = this.resources.filter(x => x.resourceUid !== resource.resourceUid);
    }
    return resource;
  }

  public deleteResourceRange(resourceUids: string[]): void {
    this.resources = this.resources.filter(x => !resourceUids.includes(x.resourceUid));
  }

  private resources: MediaResource[] = [];

  private static instance: MediaManagerService = null;
}
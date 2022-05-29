export default interface IMediaResource {
  readonly resourceUid: string;
  readonly width: number;
  readonly height: number;
  readonly url: string;
  readonly size: number;
  name: string;
  defaultAlt: string;
  description: string;
}
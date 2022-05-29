import INodeModel from 'model/INodeModel';

export default interface ISavable<TSource, TObject = INodeModel> {
  save(): TObject;
  load(obj: TObject): TSource;
}

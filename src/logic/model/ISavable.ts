import INodeModel from 'model/INodeModel';

export default interface ISavable<T> {
  save(): INodeModel;
  load(obj: INodeModel): T;
}

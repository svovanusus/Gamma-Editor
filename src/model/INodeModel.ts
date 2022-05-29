import ISettingsModel from 'model/ISettingsModel';

type NodeProp = number | string | boolean | INodeModel;

export default interface INodeModel {
  type: number;
  [key: string]: NodeProp | Array<NodeProp> | ISettingsModel | undefined;
}

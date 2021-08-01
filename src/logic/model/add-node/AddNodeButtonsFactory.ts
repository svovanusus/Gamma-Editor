import AddNodeButton from 'logic/model/add-node/AddNodeButton';
import NodeTypeEnum from 'logic/model/NodeTypeEnum';


export default class AddNodeButtonsFactory {
  private static _instance: AddNodeButtonsFactory = null;

  public readonly addNodeButtons: AddNodeButton[] = [];

  private constructor() {
    this.addNodeButtons.push(new AddNodeButton(NodeTypeEnum.TextNodeType, 'Text', 'Simple text element', 'mdi-text-recognition'));
    this.addNodeButtons.push(new AddNodeButton(NodeTypeEnum.ButtonNodeType, 'Button', 'Simple button', 'mdi-gesture-tap-button'));
    this.addNodeButtons.push(new AddNodeButton(NodeTypeEnum.SimpleContainerNodeType, 'Simple Container', 'Simple container element', 'mdi-view-grid'));
    this.addNodeButtons.push(new AddNodeButton(NodeTypeEnum.ColumnsContainerNodeType, 'Columns Container', 'Container with columns', 'mdi-view-column'));
  }

  public static getInstance() {
    if (!this._instance) this._instance = new AddNodeButtonsFactory();
    return this._instance;
  }
}
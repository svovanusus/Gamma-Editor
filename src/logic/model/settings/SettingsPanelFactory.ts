import NodeTypeEnum from 'logic/model/NodeTypeEnum';
import NodeBase from 'logic/model/page/NodeBase';
import ButtonNodeSettingsPanelCreator from 'logic/model/settings/panel-creators/ButtonNodeSettingsPanelCreator';
import PageDocumentSettingsPanelCreator from 'logic/model/settings/panel-creators/PageDocumentSettingsPanelCreator';
import SimpleContainerNodeSettingsPanelCreator from 'logic/model/settings/panel-creators/SimpleContainerNodeSettingsPanelCreator';
import TextNodeSettingsPanelCreator from 'logic/model/settings/panel-creators/TextNodeSettingsPanelCreator';
import ColumnsContainerNodeSettingsPanelCreator from 'logic/model/settings/panel-creators/ColumnsContainerNodeSettingsPanelCreator';
import ImageNodeSettingsPanelCreator from 'logic/model/settings/panel-creators/ImageNodeSettingsPanelCreator';
import SettingsPanel from 'logic/model/settings/SettingsPanel';
import SettingsPanelCreator from 'logic/model/settings/SettingsPanelCreator';

export default class SettingsPanelFactory {
  private static _instance: SettingsPanelFactory | null = null;

  private readonly settingsPanelCreatorTable: {
    [nodeType: number]: SettingsPanelCreator<any>;
  } = {};

  private constructor() {
    this.settingsPanelCreatorTable[NodeTypeEnum.PageDocumentNodeType] =
      new PageDocumentSettingsPanelCreator();

    this.settingsPanelCreatorTable[NodeTypeEnum.TextNodeType] =
      new TextNodeSettingsPanelCreator();

    this.settingsPanelCreatorTable[NodeTypeEnum.ButtonNodeType] =
      new ButtonNodeSettingsPanelCreator();

    this.settingsPanelCreatorTable[NodeTypeEnum.SimpleContainerNodeType] =
      new SimpleContainerNodeSettingsPanelCreator();

    this.settingsPanelCreatorTable[NodeTypeEnum.ColumnsContainerNodeType] =
      new ColumnsContainerNodeSettingsPanelCreator();

    this.settingsPanelCreatorTable[NodeTypeEnum.ImageNodeType] =
      new ImageNodeSettingsPanelCreator();
  }

  public static getInstance(): SettingsPanelFactory {
    if (!this._instance) this._instance = new SettingsPanelFactory();
    return this._instance;
  }

  public getPanel<TModel extends NodeBase>(
    model: TModel | null
  ): SettingsPanel<TModel> | null {
    if (!model) return null;
    const creator = this.settingsPanelCreatorTable[model.type];

    return creator?.createPanel(model);
  }
}

import NodeBase from 'logic/model/page/NodeBase';
import SettingsPanel from 'logic/model/settings/SettingsPanel';

export default abstract class SettingsPanelCreator<TModel extends NodeBase> {
  public abstract createPanel(model: TModel): SettingsPanel<TModel>;
}

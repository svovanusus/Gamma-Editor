import NodeBase from 'logic/model/page/NodeBase';
import SettingBase from 'logic/model/settings/parts/SettingBase';

export default class SettingsPanel<TModel extends NodeBase> {
  public readonly parts: SettingBase<TModel>[];
  public readonly model: TModel;

  private constructor(model: TModel) {
    this.model = model;
    this.parts = [];
  }

  public static create<T extends NodeBase>(model: T): SettingsPanel<T> {
    return new SettingsPanel(model);
  }

  public addPart<T>(part: SettingBase<TModel, T>): SettingsPanel<TModel> {
    this.parts.push(part);
    return this;
  }

  public get title(): string {
    return this.model.name;
  }

  public set title(val: string) {
    this.model.name = val;
  }
}

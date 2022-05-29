import BackgroundType from 'logic/model/page/settings/BackgroundType';
import BackgroundSize, { SavedBackgroundSize } from 'logic/model/page/settings/BackgroundSize';
import BackgroundPosition, { SavedBackgroundPosition } from 'logic/model/page/settings/BackgroundPosition';
import ISavable from 'logic/model/ISavable';
import ISettingsModel from 'model/ISettingsModel';

export interface SavedBackgroundSettings extends ISettingsModel {
  type: BackgroundType;
  color: string;
  resourceUid: string;
  transparency: number;
  size: SavedBackgroundSize;
  position: SavedBackgroundPosition;
}

export default class BackgroundSettingsModel implements ISavable<BackgroundSettingsModel, SavedBackgroundSettings> {
  public type: BackgroundType;
  public color: string;
  public resourceUid: string;
  public transparency: number;
  public size: BackgroundSize;
  public position: BackgroundPosition;

  save(): SavedBackgroundSettings {
    return {
      type: this.type,
      color: this.color,
      resourceUid: this.resourceUid,
      transparency: this.transparency,
      size: this.size.save(),
      position: this.position.save(),
    };
  }

  load(obj: SavedBackgroundSettings): BackgroundSettingsModel {
    this.type = obj.type ?? BackgroundType.None;
    this.color = obj.color ?? '#FFFFFF';
    this.resourceUid = obj.resourceUid ?? null;
    this.transparency = obj.transparency ?? 0;
    this.size = new BackgroundSize().load(obj.size ?? ({} as SavedBackgroundSize));
    this.position = new BackgroundPosition().load(obj.position ?? ({} as SavedBackgroundPosition));
    return this;
  }
}
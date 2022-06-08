import BackgroundType from 'logic/model/page/settings/BackgroundType';
import BackgroundSize, { SavedBackgroundSize } from 'logic/model/page/settings/BackgroundSize';
import BackgroundPosition, { SavedBackgroundPosition } from 'logic/model/page/settings/BackgroundPosition';
import ISavable from 'logic/model/ISavable';
import ISettingsModel from 'model/ISettingsModel';
import _default from 'vuex';

export interface SavedBackgroundSettings extends ISettingsModel {
  type: BackgroundType;
  color: string;
  resourceUid: string;
  transparency: number;
  size: SavedBackgroundSize;
  position: SavedBackgroundPosition;
}

export default class BackgroundSettingsModel implements ISavable<BackgroundSettingsModel, SavedBackgroundSettings> {
  public type: BackgroundType = __defaults.type;
  public color: string = __defaults.color;
  public resourceUid: string = __defaults.resourceUid;
  public transparency: number = __defaults.transparency;
  public size: BackgroundSize = __defaults.size.clone();
  public position: BackgroundPosition = __defaults.position.clone();

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
    this.type = obj.type ?? __defaults.type;
    this.color = obj.color ?? __defaults.color;
    this.resourceUid = obj.resourceUid ?? __defaults.resourceUid;
    this.transparency = obj.transparency ?? __defaults.transparency;
    this.size = obj.size ? new BackgroundSize().load(obj.size) : __defaults.size.clone();
    this.position = obj.position ? new BackgroundPosition().load(obj.position) : __defaults.position.clone();
    return this;
  }
}

const __defaults = {
  type: BackgroundType.None,
  color: '#FFFFFF',
  resourceUid: null,
  transparency: 0,
  size: new BackgroundSize(),
  position: new BackgroundPosition(),
};
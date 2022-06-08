import BackgroundPositionType from 'logic/model/page/settings/BackgroundPosigionType';
import OffsetSettingsModel, { SavedOffsetSettings } from 'logic/model/page/settings/OffsetSettingsModel';
import ISavable from 'logic/model/ISavable';
import ISettingsModel from 'model/ISettingsModel';
import ICloneable from '../ICloneable';

export interface SavedBackgroundPosition extends ISettingsModel {
  type: BackgroundPositionType;
  offset: SavedOffsetSettings;
}

export default class BackgroundPosition implements ISavable<BackgroundPosition, SavedBackgroundPosition>, ICloneable<BackgroundPosition> {
  public type: BackgroundPositionType = __defaults.type;
  public offset: OffsetSettingsModel = __defaults.offset.clone();

  save(): SavedBackgroundPosition {
    return {
      type: this.type,
      offset: this.offset.save(),
    };
  }

  load(obj: SavedBackgroundPosition): BackgroundPosition {
    this.type = obj.type ?? BackgroundPositionType.TopLeft;
    this.offset = obj.offset ? new OffsetSettingsModel().load(obj.offset) : __defaults.offset.clone();
    return this;
  }

  clone(): BackgroundPosition {
    return new BackgroundPosition().load(this.save());
  }
}

const __defaults = {
  type: BackgroundPositionType.TopLeft,
  offset: new OffsetSettingsModel(),
};
import BackgroundPositionType from 'logic/model/page/settings/BackgroundPosigionType';
import OffsetSettingsModel, { SavedOffsetSettings } from 'logic/model/page/settings/OffsetSettingsModel';
import ISavable from 'logic/model/ISavable';
import ISettingsModel from 'model/ISettingsModel';

export interface SavedBackgroundPosition extends ISettingsModel {
  type: BackgroundPositionType;
  offset: SavedOffsetSettings;
}

export default class BackgroundPosition implements ISavable<BackgroundPosition, SavedBackgroundPosition> {
  public type: BackgroundPositionType;
  public offset: OffsetSettingsModel;

  save(): SavedBackgroundPosition {
    return {
      type: this.type,
      offset: this.offset.save(),
    };
  }

  load(obj: SavedBackgroundPosition): BackgroundPosition {
    this.type = obj.type ?? BackgroundPositionType.TopLeft;
    this.offset = new OffsetSettingsModel().load(obj.offset ?? ({} as SavedOffsetSettings));
    return this;
  }
}
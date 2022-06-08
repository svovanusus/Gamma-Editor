import ISavable from 'logic/model/ISavable';
import CssMeasure, { SavedCssMeasure } from 'logic/model/page/settings/CssMeasure';
import ISettingsModel from 'model/ISettingsModel';
import ICloneable from '../ICloneable';

export interface SavedOffsetSettings extends ISettingsModel {
  horizontal: SavedCssMeasure;
  vertical: SavedCssMeasure;
}

export default class OffsetSettingsModel implements ISavable<OffsetSettingsModel, SavedOffsetSettings>, ICloneable<OffsetSettingsModel> {
  public horizontal: CssMeasure = __defaults.horizontal.clone();
  public vertical: CssMeasure = __defaults.vertical.clone();

  save(): SavedOffsetSettings {
    return {
      horizontal: this.horizontal.save(),
      vertical: this.vertical.save(),
    };
  }

  load(obj: SavedOffsetSettings): OffsetSettingsModel {
    this.horizontal = obj.horizontal ? new CssMeasure().load(obj.horizontal) : __defaults.horizontal.clone();
    this.vertical = obj.vertical ? new CssMeasure().load(obj.vertical) : __defaults.vertical.clone();
    return this;
  }

  clone(): OffsetSettingsModel {
      return new OffsetSettingsModel().load(this.save());
  }
}

const __defaults = {
  horizontal: new CssMeasure(),
  vertical: new CssMeasure(),
};
import ISavable from 'logic/model/ISavable';
import CssMeasure, { SavedCssMeasure } from 'logic/model/page/settings/CssMeasure';
import ISettingsModel from 'model/ISettingsModel';

export interface SavedOffsetSettings extends ISettingsModel {
  horizontal: SavedCssMeasure;
  vertical: SavedCssMeasure;
}

export default class OffsetSettingsModel implements ISavable<OffsetSettingsModel, SavedOffsetSettings> {
  public horizontal: CssMeasure;
  public vertical: CssMeasure;

  save(): SavedOffsetSettings {
    return {
      horizontal: this.horizontal.save(),
      vertical: this.vertical.save(),
    };
  }

  load(obj: SavedOffsetSettings): OffsetSettingsModel {
    this.horizontal = new CssMeasure().load(obj.horizontal ?? ({} as SavedCssMeasure));
    this.vertical = new CssMeasure().load(obj.vertical ?? ({} as SavedCssMeasure));
    return this;
  }
}
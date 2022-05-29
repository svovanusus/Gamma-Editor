import ISavable from 'logic/model/ISavable';
import BackgroundSizeType from 'logic/model/page/settings/BackgroundSizeType';
import CssMeasure, { SavedCssMeasure } from 'logic/model/page/settings/CssMeasure';
import ISettingsModel from 'model/ISettingsModel';

export interface SavedBackgroundSize extends ISettingsModel {
  type: BackgroundSizeType;
  width: SavedCssMeasure;
  height: SavedCssMeasure;
}

export default class BackgroundSize implements ISavable<BackgroundSize, SavedBackgroundSize>{
  public type: BackgroundSizeType;
  public width: CssMeasure;
  public height: CssMeasure;

  save(): SavedBackgroundSize {
    return {
      type: this.type,
      width: this.width.save(),
      height: this.height.save(),
    };
  }

  load(obj: SavedBackgroundSize): BackgroundSize {
    this.type = obj.type ?? BackgroundSizeType.Default;
    this.width = new CssMeasure().load(obj.width ?? ({} as SavedCssMeasure));
    this.height = new CssMeasure().load(obj.height ?? ({} as SavedCssMeasure));
    return this;
  }
}
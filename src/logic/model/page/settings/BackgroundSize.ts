import ISavable from 'logic/model/ISavable';
import BackgroundSizeType from 'logic/model/page/settings/BackgroundSizeType';
import CssMeasure, { SavedCssMeasure } from 'logic/model/page/settings/CssMeasure';
import ISettingsModel from 'model/ISettingsModel';
import ICloneable from '../ICloneable';

export interface SavedBackgroundSize extends ISettingsModel {
  type: BackgroundSizeType;
  width: SavedCssMeasure;
  height: SavedCssMeasure;
}

export default class BackgroundSize implements ISavable<BackgroundSize, SavedBackgroundSize>, ICloneable<BackgroundSize>{
  public type: BackgroundSizeType = __defaults.type;
  public width: CssMeasure = __defaults.width.clone();
  public height: CssMeasure = __defaults.height.clone();

  save(): SavedBackgroundSize {
    return {
      type: this.type,
      width: this.width.save(),
      height: this.height.save(),
    };
  }

  load(obj: SavedBackgroundSize): BackgroundSize {
    this.type = obj.type ?? BackgroundSizeType.Default;
    this.width = obj.width ? new CssMeasure().load(obj.width) : __defaults.width.clone();
    this.height = obj.height ? new CssMeasure().load(obj.height) : __defaults.height.clone();
    return this;
  }

  clone(): BackgroundSize {
    return new BackgroundSize().load(this.save());
  }
}

const __defaults = {
  type: BackgroundSizeType.Default,
  width: new CssMeasure(),
  height: new CssMeasure(),
};
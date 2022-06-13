import ISavable from 'logic/model/ISavable';
import ISettingsModel from 'model/ISettingsModel';
import ICloneable from '../ICloneable';
import CssMeasure, { SavedCssMeasure } from './CssMeasure';

export interface SavedBoxSpacingSettings extends ISettingsModel {
  top: SavedCssMeasure;
  bottom: SavedCssMeasure;
  left: SavedCssMeasure;
  right: SavedCssMeasure;
}

export default class BoxSpacingSettingsModel implements ISavable<BoxSpacingSettingsModel, SavedBoxSpacingSettings>, ICloneable<BoxSpacingSettingsModel> {
  public top: CssMeasure = __defaults.top.clone();
  public bottom: CssMeasure = __defaults.bottom.clone();
  public left: CssMeasure = __defaults.left.clone();
  public right: CssMeasure = __defaults.right.clone();

  save(): SavedBoxSpacingSettings {
    return {
      top: this.top.save(),
      bottom: this.bottom.save(),
      left: this.left.save(),
      right: this.right.save(),
    };
  }

  load(obj: SavedBoxSpacingSettings): BoxSpacingSettingsModel {
    this.top = obj.top ? new CssMeasure().load(obj.top) : __defaults.top.clone();
    this.bottom = obj.bottom ? new CssMeasure().load(obj.bottom) : __defaults.bottom.clone();
    this.left = obj.left ? new CssMeasure().load(obj.left) : __defaults.left.clone();
    this.right = obj.right ? new CssMeasure().load(obj.right) : __defaults.right.clone();
    return this;
  }

  clone(): BoxSpacingSettingsModel {
    return new BoxSpacingSettingsModel().load(this.save());
  }
}

const __defaults = {
  top: new CssMeasure(),
  bottom: new CssMeasure(),
  left: new CssMeasure(),
  right: new CssMeasure(),
};
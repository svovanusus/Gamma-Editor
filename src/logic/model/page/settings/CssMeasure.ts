import ISavable from 'logic/model/ISavable';
import CssMeasureType from 'logic/model/page/settings/CssMeasureType';
import ISettingsModel from 'model/ISettingsModel';
import ICloneable from '../ICloneable';

export interface SavedCssMeasure extends ISettingsModel {
  measureType: CssMeasureType;
  value: number;
}

export default class CssMeasure implements ISavable<CssMeasure, SavedCssMeasure>, ICloneable<CssMeasure> {
  public measureType: CssMeasureType = __defaults.measureType;
  public value: number = __defaults.value;

  save(): SavedCssMeasure {
    return {
      measureType: this.measureType,
      value: this.value,
    };
  }

  load(obj: SavedCssMeasure): CssMeasure {
    this.measureType = obj.measureType ?? __defaults.measureType;
    this.value = obj.value ?? __defaults.value;
    return this;
  }

  clone(): CssMeasure {
    return new CssMeasure().load(this.save());
  }
}

const __defaults = {
  measureType: CssMeasureType.Px,
  value: 0,
};
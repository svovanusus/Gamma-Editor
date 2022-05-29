import ISavable from 'logic/model/ISavable';
import CssMeasureType from 'logic/model/page/settings/CssMeasureType';
import ISettingsModel from 'model/ISettingsModel';

export interface SavedCssMeasure extends ISettingsModel {
  measureType: CssMeasureType;
  value: number;
}

export default class CssMeasure implements ISavable<CssMeasure, SavedCssMeasure> {
  public measureType: CssMeasureType;
  public value: number;

  save(): SavedCssMeasure {
    return {
      measureType: this.measureType,
      value: this.value,
    };
  }

  load(obj: SavedCssMeasure): CssMeasure {
    this.measureType = obj.measureType ?? CssMeasureType.Px;
    this.value = obj.value ?? 0;
    return this;
  }
}
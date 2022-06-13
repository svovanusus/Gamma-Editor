import NodeBase from 'logic/model/page/NodeBase';
import CssMeasure from 'logic/model/page/settings/CssMeasure';
import SettingBase from 'logic/model/settings/parts/SettingBase';

export default class CssMeasureSetting<TModel extends NodeBase, TField extends CssMeasure = CssMeasure> extends SettingBase<TModel, TField> {
  public constructor(model: TModel, fieldName: keyof TModel, label?: string) {
    super('CssMeasureSettingComponent', model, fieldName, label);
  }
}

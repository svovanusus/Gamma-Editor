import { Vue, Prop } from 'vue-property-decorator';

export default class SettingComponentBase<TSetting, TModel> extends Vue {
  @Prop({ required: true }) public readonly setting!: TSetting;

  public get model(): TModel {
    return this.setting['value'];
  }

  public set model(val: TModel) {
    this.setting['value'] = val;
  }
}
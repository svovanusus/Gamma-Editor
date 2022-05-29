type SettingsProp = number | string | boolean | ISettingsModel;

export default interface ISettingsModel {
  [key: string]: SettingsProp | Array<SettingsProp> | undefined;
}
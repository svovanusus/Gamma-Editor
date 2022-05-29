export default class FormatHelper {
  private constructor() {}

  public static formatFileSize(size: number): string {
    const units = ['B', 'KB', 'MB', 'GB'];
    let currentUnitIndex = 0;

    while (size >= 1000 && currentUnitIndex < units.length - 1) {
      size /= 1024;
      currentUnitIndex++;
    }

    return `${size.toFixed(currentUnitIndex ? 2 : 0)} ${units[currentUnitIndex]}`;
  }
}
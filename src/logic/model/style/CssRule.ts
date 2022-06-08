import IRuleSelector from 'logic/model/style/IRuleSelector';

export class CssProperty {
  public readonly name: string;
  public readonly value: string;

  public constructor(name: string, value: string = '') {
    this.name = name;
    this.value = value;
  }

  public toString(): string {
    return `${this.name}: ${this.value};`;
  }
}

export default class CssRule {
  public readonly nodeId: string;
  public readonly pseudoElement: string;
  public readonly pseudoClass: string;
  public readonly subselector: string;
  public readonly properties: CssProperty[];

  public constructor(nodeId: string, pseudoElement: string = null, pseudoClass: string = null, subselector: string = null, properties: CssProperty[] = []) {
    this.nodeId = nodeId;
    this.pseudoElement = pseudoElement;
    this.pseudoClass = pseudoClass;
    this.subselector = subselector;
    this.properties = properties;
  }

  public static createRuleForSelector(ruleSelector: IRuleSelector): CssRule {
    return new CssRule(
      ruleSelector.id,
      ruleSelector.pseudoElement ?? null,
      ruleSelector.pseudoClass ?? null,
      ruleSelector.subselector ?? null
    );
  }

  public static getSelectorStringForRuleSelector(ruleSelector: IRuleSelector): string {
    return CssRule.generateSelectorString(ruleSelector.id, ruleSelector.pseudoElement, ruleSelector.pseudoClass, ruleSelector.subselector);
  }

  public matchWithRuleSelector(ruleSelector: IRuleSelector): boolean {
    if (ruleSelector.id !== this.nodeId) return false;
    if ((ruleSelector.pseudoElement ?? null) !== this.pseudoElement) return false;
    if ((ruleSelector.pseudoClass ?? null) !== this.pseudoClass) return false;
    if ((ruleSelector.subselector ?? null) !== this.subselector) return false;
    return true;
  }

  public getSelectorString(): string {
    return CssRule.generateSelectorString(this.nodeId, this.pseudoElement, this.pseudoClass, this.subselector);
  }

  public setPropertyObj(property: CssProperty): void {
    const foundIndex = this.properties.findIndex(x => x.name === property.name);
    if (foundIndex >= 0) {
      this.properties.splice(foundIndex, 1);
    }

    this.properties.push(property);
  }

  public setProperty(name: string, value?: string): void {
    this.setPropertyObj(new CssProperty(name, value));
  }

  public getCssText(): string {
    return `${this.getSelectorString()} {${this.properties.map(x => x.toString()).join('')}}`;
  }

  private static generateSelectorString(nodeId: string, pseudoElement: string, pseudoClass: string, subselector: string): string {
    const pseudoElementPart = pseudoElement?.trim() ? `::${pseudoElement}` : '';
    const pseudoClassPart = pseudoClass?.trim() ? `:${pseudoClass}` : '';
    const subselectorPart = subselector?.trim() ? ` ${subselector}` : '';

    return `#${nodeId}${pseudoElementPart}${pseudoClassPart}${subselectorPart}`;
  }
}
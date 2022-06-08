import CssRule from 'logic/model/style/CssRule';
import IRuleSelector from 'logic/model/style/IRuleSelector';

interface RulesTable {
  [key: string]: CssRule;
}

export class CssRuleProxy {
  public constructor(rule: CssRule, callback: (rule: CssRule) => void) {
    this.rule = rule;
    this.callback = callback ?? (() => {});
  }

  public setProperty(name: string, value: string): CssRuleProxy {
    this.rule.setProperty(name, value);
    this.callback.call(null, this.rule);
    return this;
  }

  private rule: CssRule;
  private callback: (rule: CssRule) => void;
}

export default class CssStylesheet {
  public activate(): void {
    if (this.isActive && this.browerStylesheet) return;

    let index = 0;
    while (index < 1000 && !!document.getElementById(`page-stylesheet-${index}`)) {
      index++;
    }

    this.htmlId = `page-stylesheet-${index}`;

    const styleEl = document.createElement('style');
    styleEl.id = this.htmlId;
    document.body.appendChild(styleEl);

    this.browerStylesheet = null;
    for (let i = 0; i < document.styleSheets.length; i++) {
      if ((document.styleSheets.item(i).ownerNode as HTMLElement).id === this.htmlId) {
        this.browerStylesheet = document.styleSheets.item(i);
        break;
      }
    }

    if (this.browerStylesheet) {
      this.isActive = true;
    }
  }

  public deactivate(): void {
    if (!this.isActive) return;

    const styleEl = document.getElementById(this.htmlId);
    if (styleEl) {
      styleEl.parentElement.removeChild(styleEl);
    }

    this.browerStylesheet = null;
    this.htmlId = null;
    this.isActive = false;
  }

  public forRule(ruleSelector: IRuleSelector): CssRuleProxy {
    const ruleSelectorString = CssRule.getSelectorStringForRuleSelector(ruleSelector);
    if (!this.rules[ruleSelectorString]) {
      const rule = CssRule.createRuleForSelector(ruleSelector);
      this.rules[ruleSelectorString] = rule;
    }

    return new CssRuleProxy(this.rules[ruleSelectorString], (rule) => this.updateBrowserStyles(rule));
  }

  public setProperty(ruleSelector: IRuleSelector, propertyName: string, propertyValue: string): void {
    this.forRule(ruleSelector).setProperty(propertyName, propertyValue);
  }

  public cleanRulesForNode(nodeId: string): void {
    for (let key of Object.keys(this.rules)) {
      const rule = this.rules[key];
      if (rule.nodeId === nodeId) {
        this.removeBrowserStyleRule(rule);
        delete this.rules[key];
      }
    }
  }

  private removeBrowserStyleRule(rule: CssRule): void {
    if (!this.isActive) return;
    
    const ruleSelectorString = rule.getSelectorString();
    for (let i = 0; i < this.browerStylesheet.cssRules.length; i++) {
      const browserRule = this.browerStylesheet.cssRules.item(i);
      if ((browserRule as any).selectorText === ruleSelectorString) {
        this.browerStylesheet.deleteRule(i);
      }
    }
  }

  private updateBrowserStyles(rule: CssRule): void {
    if (!this.isActive) return;

    this.removeBrowserStyleRule(rule);
    try {
      this.browerStylesheet.insertRule(rule.getCssText());
    } catch(e) {
      console.warn(e);
    }
  }

  protected isActive: boolean = false;
  protected readonly rules: RulesTable = {};
  private browerStylesheet: CSSStyleSheet = null;
  private htmlId: string = null;
}
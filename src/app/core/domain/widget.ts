export class Widgets {
  constructor(private widgets: Array<Widget>) {
  }
}

export class Widget {
  constructor(
    private id: number,
    private name: string,
    private type: WidgetType,
    private items: Array<Section>,
  ) {
  }
}

export class Section {
  constructor(
    private type: SectionType,
    private header: string,
    private columns: number,
    private items: Array<Control>,
  ) {
  }
}

export class Control {
  constructor(
    private type: ControlType,
    private label: string,
    private value: string,
    private required: boolean,
    private symbol: CurrencySymbol,
    private precision: number,
  ) {
  }
}

export enum WidgetType {
  FORM = 'form',
}
export enum SectionType {
  SECTION = 'section',
}
export enum CurrencySymbol {
  EUR = 'EUR',
  USD = 'USD',
}
export enum ControlType {
  INPUT = 'input',
  CURRENCY = 'currency',
}

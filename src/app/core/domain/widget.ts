export class Widgets {
  widgets: Array<Widget>;

  constructor(widgets: Array<Widget>) {
    this.widgets = widgets;
  }
}

export class Widget {
  id: number;
  name: string;
  type: WidgetType;
  items: Array<Section>;

  constructor(id: number, name: string, type: WidgetType, items: Array<Section>) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.items = items;
  }
}

export class Section {
  type: SectionType;
  header: string;
  columns: number;
  items: Array<Control>;

  constructor(type: SectionType, header: string, columns: number, items: Array<Control>) {
    this.type = type;
    this.header = header;
    this.columns = columns;
    this.items = items;
  }
}

export class Control {
  type: ControlType;
  label: string;
  value: string;
  required: boolean;
  symbol: CurrencySymbol;
  precision: number;

  constructor(type: ControlType, label: string, value: string, required: boolean, symbol: CurrencySymbol, precision: number) {
    this.type = type;
    this.label = label;
    this.value = value;
    this.required = required;
    this.symbol = symbol;
    this.precision = precision;
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

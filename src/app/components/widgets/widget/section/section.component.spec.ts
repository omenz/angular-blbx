import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionComponent} from './section.component';
import {Section, SectionType} from '../../../../core/domain/widget';
import {CurrencyComponent} from '../../../controls/currency/currency.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        SectionComponent,
        CurrencyComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    component.section = new Section(SectionType.SECTION, 'header', 2, []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

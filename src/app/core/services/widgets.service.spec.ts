import {getTestBed, TestBed} from '@angular/core/testing';

import {WidgetsService} from './widgets.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Widget, Widgets, WidgetType} from '../domain/widget';

const testWidgets: Widgets = new Widgets([new Widget(1, 'pew pew', WidgetType.FORM, [])]);

describe('WidgetsService', () => {
  let injector: TestBed;
  let service: WidgetsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WidgetsService]
    });
    injector = getTestBed();
    service = injector.get(WidgetsService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch widgets', () => {
      const dataUrl = '/foo/bar';
      service.getWidgets(dataUrl).subscribe((res: Widgets) => expect(res).toEqual(testWidgets));
      const req = httpMock.expectOne({
        url: dataUrl,
        method: 'GET'
      });
      req.flush(testWidgets);
    }
  );
});

import {async, inject, TestBed} from '@angular/core/testing';

import {WidgetsService} from './widgets.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Widget, Widgets, WidgetType} from '../domain/widget';

const testWidgets: Widgets = {
  widgets: [new Widget(1, 'pew pew', WidgetType.FORM, [])]
};

describe('WidgetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule,
    ]
  }));

  it('should be created', () => {
    const service: WidgetsService = TestBed.get(WidgetsService);
    expect(service).toBeTruthy();
  });
  it('should fetch widgets', async(
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
        const dataUrl = '/foo/bar';
        const service: WidgetsService = new WidgetsService(http);
        service.getWidgets(dataUrl)
          .subscribe((res: Widgets) => expect(res).toEqual(testWidgets));
        const getWidgetsRequest = backend.expectOne({
          url: dataUrl,
          method: 'GET'
        });
        getWidgetsRequest.flush(testWidgets);
        backend.verify();
      })
    )
  );
});

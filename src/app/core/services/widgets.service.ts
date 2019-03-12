import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Widgets} from '../domain/widget';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  constructor(private httpClient: HttpClient) { }

  getWidgets(url: string): Observable<Widgets> {
    return this.httpClient.get<Widgets>(url);
  }
}

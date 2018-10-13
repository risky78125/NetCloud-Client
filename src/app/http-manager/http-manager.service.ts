import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {DataBean, ResultWrapper} from './beans';
import {catchError, every, filter, map, tap} from 'rxjs/operators';
import toast from 'devextreme/ui/toast';

@Injectable({
  providedIn: 'root'
})
export class HttpManager {

  HOST = 'http://localhost:8080/';

  headers: HttpHeaders = new HttpHeaders({
  });

  constructor(private http: HttpClient) {
  }

  public get(url: string, params?: any, headers?: HttpHeaders): Observable<ResultWrapper> {
    return this.http.get<ResultWrapper>(this.HOST + url, {
      headers: headers || this.headers,
      params: params
    });
  }

  public post(url: string, formBody?: any, params?: HttpParams, headers?: HttpHeaders): Observable<ResultWrapper> {
    return this.http.post<ResultWrapper>(this.HOST + url, formBody, {
      headers: headers || this.headers,
      params: params || null
    });
  }
}



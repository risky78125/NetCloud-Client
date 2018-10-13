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

  HOST_URL = 'http://localhost:8080/';

  EMPTY_RESULT: ResultWrapper = {
    status: true,
    code: 500,
    message: '服务器错误',
    data: {
      totalSize: 0,
      items: []
    }
  };

  mockData: ResultWrapper = {
    status: true,
    code: 300,
    message: '服务器错误',
    data: {
      totalSize: 50,
      items: [
        {
          id: 1,
          name: '张三'
        },
        {
          id: 2,
          name: '李四'
        },
        {
          id: 3,
          name: '王二麻子'
        },
        {
          id: 4,
          name: '小淘气'
        }
      ]
    }

  };

  headers: HttpHeaders = new HttpHeaders({
  });

  constructor(private http: HttpClient) {
  }

  public test() {
    console.log('HttpManager is invoked');
    of(this.mockData)
      .pipe(
        tap(result => {
          if (!result.status) {
            throw new Error(result.message);
          }
        }),
        // filter(result => result.status),
        catchError(error => of(this.EMPTY_RESULT)),
        map(result => result.data)
      ).subscribe(
      data => {
        console.log(data);
      },
      error => console.log('捕获异常', error.message));
  }

  public get(url: string, params?: any, headers?: HttpHeaders): Observable<ResultWrapper> {
    return this.http.get<ResultWrapper>(url, {
      headers: headers || this.headers,
      params: params
    });
  }

  public post(url: string, formBody?: any, params?: HttpParams, headers?: HttpHeaders): Observable<ResultWrapper> {
    return this.http.post<ResultWrapper>(url, formBody, {
      headers: headers || this.headers,
      params: params || null
    });
  }
}



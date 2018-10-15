import {Injectable} from '@angular/core';
import {HttpManager} from '../../http-manager/http-manager.service';
import {Observable} from 'rxjs';
import {ResultWrapper} from '../../http-manager/beans';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpManager: HttpManager) {
  }

  getAdminsByCondition(params: AdminParams): Observable<ResultWrapper> {
    return this.httpManager.get('admin/list', params);
  }

  getModules(): Observable<ResultWrapper> {
    return this.httpManager.get('role/modules');
  }
}

export class AdminParams {
  constructor(
    public page: number,
    public moduleId: number,
    public roleName: string
  ) {
  }
}

import {Injectable} from '@angular/core';
import {HttpManager} from '../../http-manager/http-manager.service';
import {Observable} from 'rxjs';
import {DataBean, ResultWrapper} from '../../http-manager/beans';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpManager: HttpManager) {
  }

  getRolesByPage(page: number): Observable<DataBean> {
    return this.httpManager.get('role/list', {page: page})
      .pipe(
        map(resp => resp.data)
      );
  }

  deleteRoleById(roleId: any): Observable<ResultWrapper> {
    return this.httpManager.post(`role/delete/${roleId}`);
  }

  findAllModules(): Observable<any[]> {
    return this.httpManager.get('module/common/list')
      .pipe(
        map(resp => resp.data.items)
      );
  }

  addRoleWithModules(role: any): Observable<ResultWrapper> {
    return this.httpManager.post('role/add', role);
  }

  findRoleDetailsById(roleId: string): Observable<ResultWrapper> {
    return this.httpManager.get(`role/details/${roleId}`);
  }

  updateRoleWithModules(role: any): Observable<ResultWrapper> {
    return this.httpManager.post('role/modify', role);
  }
}

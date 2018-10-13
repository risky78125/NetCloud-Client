import {Injectable} from '@angular/core';
import {HttpManager} from '../../http-manager/http-manager.service';
import {Observable} from 'rxjs';
import {DataBean} from '../../http-manager/beans';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpManager: HttpManager) {
  }

  public getRolesByPage(page: number): Observable<DataBean> {
    return this.httpManager.get('role/list', {page: page})
      .pipe(
        map(resp => resp.data)
      );
  }

  deleteRoleById(roleId: any) {
    return this.httpManager.post(`role/delete/${roleId}`);
  }
}

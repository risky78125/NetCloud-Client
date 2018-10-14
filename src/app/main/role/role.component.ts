import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from './role.service';
import {filter, mergeMap} from 'rxjs/operators';
import {ToastUtils} from '../../commons/toast-utils';
import {DialogUtils} from '../../commons/DialogUtils';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  dataSource: RoleBean[];

  totalCount = 1;

  currentPage = 1;

  constructor(private router: Router, private roleService: RoleService) {
  }

  ngOnInit() {
    this.findRoles(1);
  }

  onAddClick() {
    this.router.navigateByUrl('main/role/add');
  }

  onPageSelected(pageIndex) {
    this.findRoles(pageIndex);
  }

  onModifyRole(role) {
    this.router.navigateByUrl(`main/role/modify/${role.roleId}`);
  }

  onDeleteRole(role) {
    DialogUtils.confirm('确定要删除?', role.roleName)
      .pipe(
        mergeMap(() => this.roleService.deleteRoleById(role.roleId)),
        filter(resp => resp.status)
      ).subscribe(resp => {
      ToastUtils.toastSuccess('删除成功');
      this.findRoles(this.currentPage);
    });
  }

  private findRoles(page) {
    this.currentPage = page;
    this.roleService.getRolesByPage(page)
      .subscribe(data => {
        this.totalCount = Math.ceil(data.totalSize / data.pageSize);
        this.dataSource = data.items;
      });
  }

}

class RoleBean {
  constructor(
    public roleId: number,
    public roleName: string,
    public moduleNames: string) {
  }
}

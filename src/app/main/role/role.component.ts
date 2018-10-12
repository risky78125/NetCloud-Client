import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  dataSource: RoleBean[] = [
    {
      roleId: 1,
      roleName: '超级管理员',
      moduleNames: '角色管理、管理员管理、资费管理、账务账号、业务账号、账单、报表'
    },
    {
      roleId: 2,
      roleName: '管理员',
      moduleNames: '角色管理、资费管理、账务账号、业务账号、账单、报表'
    },
    {
      roleId: 3,
      roleName: '资费管理员',
      moduleNames: '资费管理'
    },
    {
      roleId: 4,
      roleName: '账务账号管理员',
      moduleNames: '管理员管理'
    },
    {
      roleId: 5,
      roleName: '业务账号管理员',
      moduleNames: '角色管理、资费管理'
    },
    {
      roleId: 6,
      roleName: '账单管理员',
      moduleNames: '角色管理、管理员管理'
    },
    {
      roleId: 7,
      roleName: '报表管理员',
      moduleNames: '管理员管理、资费管理'
    }
  ];

  totalCount = 8;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  onAddClick() {
    this.router.navigateByUrl('main/role/add');
  }

  onPageSelected(pageIndex) {
    console.log(pageIndex);
  }

}

class RoleBean {
  constructor(
    public roleId: number,
    public roleName: string,
    public moduleNames: string) {}
}

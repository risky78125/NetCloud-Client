import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from './role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  dataSource: RoleBean[];

  totalCount = 1;

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

  private findRoles(page) {
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
    public name: string,
    public moduleNames: string) {
  }
}

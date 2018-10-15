import {Component, OnInit} from '@angular/core';
import {AdminService} from './admin.service';
import {ToastUtils} from '../../commons/toast-utils';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  totalCount = 1;
  dataSource: AdminExMap[] = [];
  modules: any[] = [];
  params: any = {
    roleName: '',
    moduleId: 0,
    page: 1
  };

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.adminService.getModules()
      .subscribe(resp => {
        this.modules = resp.data.items;
      });
    this.getAllAdmin();
  }

  onSearchClick() {
    console.log(this.params);
    this.getAllAdmin();
  }

  onPageSelected(pageIndex) {
    this.params.page = pageIndex;
    this.getAllAdmin();
  }

  private getAllAdmin() {
    this.adminService.getAdminsByCondition(this.params)
      .subscribe(resp => {
        if (resp.status) {
          const totalSize = resp.data.totalSize;
          const items = resp.data.items;
          this.totalCount = Math.ceil(totalSize / resp.data.pageSize);
          this.dataSource = items;
        } else {
          ToastUtils.toastFailed(resp.message);
        }
      });
  }

}

class AdminExMap {
  adminId: number;
  adminCode: string;
  adminName: string;
  telephone: string;
  email: string;
  enrolldate: string;
  roleNames: string;
}

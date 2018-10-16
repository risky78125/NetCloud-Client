import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../admin.service';
import {ToastUtils} from '../../../commons/toast-utils';
import {fromArray} from 'rxjs/internal/observable/fromArray';
import {filter, map, toArray} from 'rxjs/operators';
import {ObjectUtils} from '../../../commons/ObjectUtils';

@Component({
  selector: 'app-admin-editor',
  templateUrl: './admin-editor.component.html',
  styleUrls: ['./admin-editor.component.css']
})
export class AdminEditorComponent implements OnInit {

  adminBody: AdminEntity = new AdminEntity();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AdminService) {
    // 注册路由获取参数的事件
    route.paramMap.subscribe(params => {
      const adminId = +params.get('adminId');
      if (adminId) {
        // 编辑页面
        // 获取该用户的详细信息
        this.service.getAdminDetailsById(adminId).subscribe(resp => {
          if (resp.status) {
            this.adminBody = resp.data;
          }
        });
      } else {
        // 新增页面
        // 获取所有角色
        this.service.getRoles().subscribe(resp => {
          if (resp.status) {
            // 请求成功
            const roles: Role[] = resp.data.items;
            this.adminBody.roleList = roles;
          }
        });
      }
    });
  }

  ngOnInit() {
  }

  onSaveClick() {
    const requestBody = this.createRequestBody();
    if (requestBody.roleIds.length === 0) {
      ToastUtils.toastFailed('请至少选择一个角色');
      return;
    }
    if (this.adminBody.adminId) {
      // 更新
      delete requestBody.roleList;
      delete requestBody.password;
      delete requestBody.repeat;
      delete requestBody.enrolldate;
      delete requestBody.adminCode;
      this.service.updateAdmin(requestBody).subscribe(resp => {
        if (resp.status) {
          ToastUtils.toastSuccess(resp.message);
        } else {
          ToastUtils.toastFailed(resp.message);
        }
      });
    } else {
      // 新增
      if (this.adminBody.password !== this.adminBody.repeat) {
        ToastUtils.toastFailed('两次密码输入不一致');
        return;
      }
      delete requestBody.roleList;
      delete requestBody.repeat;
      this.service.addAdmin(requestBody).subscribe(resp => {
        if (resp.status) {
          ToastUtils.toastSuccess(resp.message);
        } else {
          ToastUtils.toastFailed(resp.message);
        }
      });
    }
    console.log(requestBody);
  }

  onCancelClick() {
    this.router.navigateByUrl('main/admin');
  }

  private createRequestBody() {
    let roleIds: number[] = [];
    fromArray(this.adminBody.roleList)
      .pipe(
        filter(role => role.selected),
        map(role => role.roleId),
        toArray()
      ).subscribe(ids => roleIds = ids);
    const requestBody = ObjectUtils.clone(this.adminBody);
    requestBody.roleIds = roleIds;
    return requestBody;
  }
}

class AdminEntity {
  adminId: number;
  adminName: string;
  adminCode: string;
  password: string;
  repeat: string;
  telephone: string;
  email: string;
  roleList: Role[];
  roleIds: number[];

  public clone(): AdminEntity {
    const admin = new AdminEntity();
    admin.adminId = this.adminId;
    admin.adminName = this.adminName;
    admin.adminCode = this.adminCode;
    admin.password = this.password;
    admin.repeat = this.repeat;
    admin.telephone = this.telephone;
    admin.email = this.email;
    return admin;
  }
}

class Role {
  roleId: number;
  roleName: string;
  selected: boolean;
}

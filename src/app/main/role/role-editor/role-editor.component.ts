import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {RoleService} from '../role.service';
import {from, of} from 'rxjs';
import {filter, map, mergeMap, toArray} from 'rxjs/operators';
import {fromArray} from 'rxjs/internal/observable/fromArray';
import {ToastUtils} from '../../../commons/toast-utils';

@Component({
  selector: 'app-role-update',
  templateUrl: './role-editor.component.html',
  styleUrls: ['./role-editor.component.css']
})
export class RoleEditorComponent implements OnInit {

  role: any = {roleName: ''};

  // modules: any[] = [];

  constructor(private roleService: RoleService) {
  }

  ngOnInit() {
    this.roleService.findAllModules()
      .subscribe(items => this.role.modules = items);
  }

  onSubmit(e) {
    e.preventDefault();
    const modules: any[] = this.role.modules;
    from(modules)
      .pipe(
        filter(module => module.isSelected),
        map(module => module.moduleId),
        toArray(),
        mergeMap(moduleIds => of({roleName: this.role.roleName, moduleIds: moduleIds})),
        mergeMap(role => this.roleService.addRoleWithModuleIds(role))
      )
      .subscribe((resp) => {
        if (resp.status) {
          ToastUtils.toastSuccess('角色新增成功');
        } else {
          ToastUtils.toastFailed('角色新增失败');
        }
      });
  }

}

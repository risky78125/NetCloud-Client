import {Component, OnInit} from '@angular/core';
import {RoleService} from '../role.service';
import {from, of} from 'rxjs';
import {filter, map, mergeMap, toArray} from 'rxjs/operators';
import {ToastUtils} from '../../../commons/toast-utils';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-role-update',
  templateUrl: './role-editor.component.html',
  styleUrls: ['./role-editor.component.css']
})
export class RoleEditorComponent implements OnInit {

  role: Role = {
    roleName: '',
    moduleList: []
  };

  // modules: any[] = [];

  constructor(
    private roleService: RoleService,
    private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const roleId = params.get('roleId');
      if (roleId) {
        this.roleService.findRoleDetailsById(roleId)
          .subscribe(resp => {
            if (resp.status) {
              this.role = resp.data;
            }
          });
      } else {
        this.role.roleName = '';
        this.roleService.findAllModules()
          .subscribe(items => this.role.moduleList = items);
      }
    });
  }

  ngOnInit() {
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.role);
    const modules: Module[] = this.role.moduleList;
    from(modules)
      .pipe(
        filter(module => module.selected),
        map(module => module.moduleId),
        toArray(),
        mergeMap(moduleIds => of({roleId: this.role.roleId, roleName: this.role.roleName, moduleIds: moduleIds})),
        mergeMap(role => {
          if (role.roleId) {
            return this.roleService.updateRoleWithModules(role);
          } else {
             return this.roleService.addRoleWithModules(role);
          }
        })
      )
      .subscribe((resp) => {
        if (resp.status) {
          ToastUtils.toastSuccess(resp.message);
        } else {
          ToastUtils.toastFailed(resp.message);
        }
      });
  }

}

class Role {
  roleId?: number;
  roleName: string;
  moduleList: Module[];
}

class Module {
  moduleId?: number;
  moduleName?: string;
  selected?: boolean;
}

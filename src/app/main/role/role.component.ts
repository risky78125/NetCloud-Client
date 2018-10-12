import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import CustomStore from 'devextreme/data/custom_store';
import {Router} from '@angular/router';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  dataSource: any = {};

  constructor(private router: Router) {
    // this.dataSource.store = new CustomStore({
    //   load: function (loadOptions: any) {
    //     let params = '?';
    //
    //     params += 'skip=' + loadOptions.skip || 0;
    //     params += '&take=' + loadOptions.take || 12;
    //
    //     if (loadOptions.sort) {
    //       params += '&orderby=' + loadOptions.sort[0].selector;
    //       if (loadOptions.sort[0].desc) {
    //         params += ' desc';
    //       }
    //     }
    //     return http.get('https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems' + params)
    //       .toPromise()
    //       .then((data: any) => {
    //         return {
    //           data: data.items,
    //           totalCount: data.totalCount
    //         };
    //       })
    //       .catch(error => {
    //       });
    //   }
    // });
  }

  ngOnInit() {
  }

  onAddClick() {
    this.router.navigateByUrl('main/role/add');
  }

}

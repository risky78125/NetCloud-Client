import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  dataSource: any = {};

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

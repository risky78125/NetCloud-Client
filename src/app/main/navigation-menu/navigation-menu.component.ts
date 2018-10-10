import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  @Output()
  menuSelect: EventEmitter<any> = new EventEmitter();

  menus = [
    {
      id: 1,
      path: 'index',
      state: true
    },
    {
      id: 2,
      path: 'role',
      state: false
    },
    {
      id: 3,
      path: 'admin',
      state: false
    },
    {
      id: 4,
      path: 'fee',
      state: false
    },
    {
      id: 5,
      path: 'account',
      state: false
    },
    {
      id: 6,
      path: 'service',
      state: false
    },
    {
      id: 7,
      path: 'bill',
      state: false
    },
    {
      id: 8,
      path: 'report',
      state: false
    },
    {
      id: 9,
      path: 'information',
      state: false
    },
    {
      id: 10,
      path: 'password',
      state: false
    }
  ];

  lastMenu = this.menus[0];
  url: string;

  constructor(router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.url = e.url;
        const indexStart = this.url.indexOf('main');
        let indexEnd = this.url.indexOf('/', indexStart + 5);
        indexEnd = indexEnd === -1 ? this.url.length : indexEnd;
        const str = this.url.substring(indexStart + 5, indexEnd);
        console.log(this.url, indexStart, indexEnd, str);
        for (const menu of this.menus) {
          menu.state = false;
        }
        for (const menu of this.menus) {
          if (str === menu.path) {
            menu.state = true;
            this.lastMenu = menu;
            this.menuSelect.emit(menu);
            break;
          }
        }
      }
    });
  }

  ngOnInit() {
  }

  onMenuSelected(currentMenu) {
    this.lastMenu.state = false;
    currentMenu.state = true;
    this.lastMenu = currentMenu;
    this.menuSelect.emit(currentMenu);
  }

}

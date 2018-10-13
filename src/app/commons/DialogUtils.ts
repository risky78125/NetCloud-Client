import {confirm, alert} from 'devextreme/ui/dialog';
import {from, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

export class DialogUtils {

  public static confirm(title: string, message: string): Observable<boolean> {
    return from(confirm(message, title)).pipe(filter(result => result));
  }

}

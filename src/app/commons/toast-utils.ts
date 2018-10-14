import notify from 'devextreme/ui/notify';

export class ToastUtils {

  public static toastSuccess(message: string) {
    notify(message, 'success', 600);
  }

  static toastFailed(message: string) {
    notify(message, 'danger', 600);
  }
}

export class ObjectUtils {

  static clone(obj: any): any {
    const temp = {};
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        temp[property] = obj[property];
      }
    }
    return temp;
  }
}

export class OkClass {
  static foo = "bar";
  static isOkClass(obj: unknown): obj is OkClass {
    return true;
  }
}

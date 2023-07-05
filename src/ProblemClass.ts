export class ProblemClass {
  static foo = "bar";
  static isProblemClass(obj: unknown): obj is ProblemClass {
    return obj instanceof ProblemClass;
  }
}

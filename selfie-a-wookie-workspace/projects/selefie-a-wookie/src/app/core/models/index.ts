export interface Result<T> {
  success: boolean,
  // error: Error,
  item: T;
}

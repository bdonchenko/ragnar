export interface IDataAction<T> {
  execute(payload: T): void;
}

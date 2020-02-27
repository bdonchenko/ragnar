export interface IDataCommand<T> {
  execute(payload: T): void;
}

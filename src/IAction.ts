export interface IAction<T> {
    subscribe(callback: (data: T) => void): () => void;
    dispatch(data: T): void;
}
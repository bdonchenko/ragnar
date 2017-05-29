import { IAction } from "./IAction";
export declare abstract class BaseAction<T> implements IAction<T> {
    private subscribers;
    subscribe(callback: (data: T) => void): () => void;
    dispatch(data: T): void;
}

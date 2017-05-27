import { IAction } from "./IAction";

export abstract class BaseAction<T> implements IAction<T> {

    private subscribers: ((data: T) => void)[] = [];

    subscribe(callback: (data: T) => void): () => void {
        this.subscribers.push(callback);

        return () => {
            this.subscribers = this.subscribers.filter(s => s !== callback);
        }
    }

    dispatch(data: T): void {
        this.subscribers
            .reverse()
            .forEach(callback => callback(data));
    }
}
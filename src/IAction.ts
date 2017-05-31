import { Subscription } from 'rxjs/Subscription';

export interface IAction<T> {
    subscribe(callback: (data: T) => void): Subscription;
    dispatch(data: T): void;
}
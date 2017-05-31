import { IAction } from "./IAction";
import { Subscription } from 'rxjs/Subscription';
export declare abstract class BaseAction<T> implements IAction<T> {
    private subject;
    subscribe(callback: (data: T) => void): Subscription;
    dispatch(data: T): void;
}

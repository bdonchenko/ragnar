import { IAction } from "./IAction";
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

export abstract class BaseAction<T> implements IAction<T> {
    
    private subject: Subject<T> = new Subject<T>();

    subscribe(callback: (data: T) => void): Subscription {
        return this.subject.subscribe(callback);
    }

    dispatch(data: T): void {
        this.subject.next(data);
    }
}
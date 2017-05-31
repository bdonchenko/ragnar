import { IStore } from "./IStore";
import { Subscription } from 'rxjs/Subscription';

export interface IStoreAccessor {
    subscribe<T extends IStore>(callback: (store: T) => void, executeImmediately: boolean): Subscription;
    updateStore<T extends IStore>(updateFunc: (store: T) => T): void;
}
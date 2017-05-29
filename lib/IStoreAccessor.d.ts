import { IStore } from "./IStore";
export interface IStoreAccessor {
    subscribeStore<T extends IStore>(callback: (store: T) => void, executeImmediately: boolean): () => void;
    updateStore<T extends IStore>(updateFunc: (store: T) => T): void;
}

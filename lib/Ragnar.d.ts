export declare abstract class BaseAction<T> implements IAction<T> {
    private subscribers;
    subscribe(callback: (data: T) => void): () => void;
    dispatch(data: T): void;
}

export declare abstract class BaseComponent implements IComponent {
    protected storeAccessor: IStoreAccessor;
    protected storeUnsubscribe: () => void;
    constructor(storeAccessor?: IStoreAccessor);
    ngOnInit(readStoreDataImmediately?: boolean): void;
    ngOnDestroy(): void;
    onStoreUpdated(store: IStore): void;
}

export interface IAction<T> {
    subscribe(callback: (data: T) => void): () => void;
    dispatch(data: T): void;
}

export interface IComponent {
    onStoreUpdated<T extends IStore>(store: T): void;
}

export interface IStore {
}

export interface IStoreAccessor {
    subscribeStore<T extends IStore>(callback: (store: T) => void, executeImmediately: boolean): () => void;
    updateStore<T extends IStore>(updateFunc: (store: T) => T): void;
}

export declare class StoreAccessor implements IStoreAccessor {
    private static store;
    private subscribers;
    constructor(store: IStore);
    subscribeStore(callback: (store: IStore) => void, executeImmediately: boolean): () => void;
    updateStore(updateFunc: (store: IStore) => IStore): void;
}

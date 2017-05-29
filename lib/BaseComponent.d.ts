import { IStoreAccessor } from "./IStoreAccessor";
import { IComponent } from "./IComponent";
import { IStore } from "./IStore";
export declare abstract class BaseComponent implements IComponent {
    protected storeAccessor: IStoreAccessor;
    protected storeUnsubscribe: () => void;
    constructor(storeAccessor?: IStoreAccessor);
    ngOnInit(readStoreDataImmediately?: boolean): void;
    ngOnDestroy(): void;
    onStoreUpdated(store: IStore): void;
}

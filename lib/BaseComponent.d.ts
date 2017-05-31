import { IStoreAccessor } from "./IStoreAccessor";
import { IComponent } from "./IComponent";
import { IStore } from "./IStore";
import { Subscription } from 'rxjs/Subscription';
export declare abstract class BaseComponent implements IComponent {
    protected storeAccessor: IStoreAccessor;
    protected subscriptions: Subscription[];
    constructor(storeAccessor?: IStoreAccessor);
    ngOnInit(readStoreDataImmediately?: boolean): void;
    ngOnDestroy(): void;
    onStoreUpdated(store: IStore): void;
}

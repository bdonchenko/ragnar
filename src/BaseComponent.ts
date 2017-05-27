import { IStoreAccessor } from "./IStoreAccessor";
import { IComponent } from "./IComponent";
import { IStore } from "./IStore";

export abstract class BaseComponent implements IComponent {
    protected storeUnsubscribe: () => void;

    constructor(protected storeAccessor?: IStoreAccessor) {}

    ngOnInit(readStoreDataImmediately: boolean = true): void {
        if (!this.storeAccessor) {
            return;
        }

        this.storeUnsubscribe =
                this.storeAccessor
                    .subscribeStore(store => this.onStoreUpdated(store), readStoreDataImmediately);
    }

    ngOnDestroy(): void {
        if (this.storeUnsubscribe) {
            this.storeUnsubscribe();
        }
    }

    onStoreUpdated(store: IStore): void {}
}
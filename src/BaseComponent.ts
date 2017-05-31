import { IStoreAccessor } from "./IStoreAccessor";
import { IComponent } from "./IComponent";
import { IStore } from "./IStore";
import { Subscription } from 'rxjs/Subscription';
import { IAction } from "./IAction";

export abstract class BaseComponent implements IComponent {
    
    protected subscriptions: Subscription[] = [];

    constructor(protected storeAccessor?: IStoreAccessor) {}

    ngOnInit(readStoreDataImmediately: boolean = true): void {
        if (!this.storeAccessor) {
            return;
        }

        let subscription =
                this.storeAccessor
                    .subscribe(store => this.onStoreUpdated(store), readStoreDataImmediately);

        this.subscriptions.push(subscription);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
        console.log('Unsubscribed:', this.subscriptions.map(s => s.closed));
    }

    //Will be called when Store is updated. Should be overwritten in derived classes
    onStoreUpdated(store: IStore): void {}
}
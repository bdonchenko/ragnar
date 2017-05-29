import { IStore } from "./IStore";
export interface IComponent {
    onStoreUpdated<T extends IStore>(store: T): void;
}

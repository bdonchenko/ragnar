import { HomeStore } from 'app/store/home/home-store';

export class Store {
  private _homeStore = new HomeStore();
  
  get homeStore(): HomeStore {
    return this._homeStore;
  }
}

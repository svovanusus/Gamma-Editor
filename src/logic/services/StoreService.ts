import IStoreService from 'logic/services/IStoreService';
import { StoreState } from 'store';
import { Store } from 'vuex';

export default class StoreService implements IStoreService {
  private constructor() {}

  public static getInstance(): StoreService {
    if (!StoreService.instance) StoreService.instance = new StoreService();
    return StoreService.instance;
  }

  public getStore(): Store<StoreState> {
    return this.store;
  }

  public setStore(store: Store<StoreState>): void {
    this.store = store;
  }

  private store: Store<StoreState>;
  private static instance: StoreService = null;
}
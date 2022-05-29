import { Store } from 'vuex';
import { StoreState } from 'store';

export default interface IStoreService {
  getStore(): Store<StoreState>;
  setStore(store: Store<StoreState>): void;
}
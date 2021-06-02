import {atom} from 'recoil';

export const currentAccountState = atom({
  key: 'currentAccount', // unique ID (with respect to other atoms/selectors)
  default: {},
});

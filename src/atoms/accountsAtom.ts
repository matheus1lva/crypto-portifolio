import {atom} from 'recoil';

export const accountsAtom = atom({
  key: 'accountsAtom', // unique ID (with respect to other atoms/selectors)
  default: {},
});

import React from 'react';
import {RecoilRoot} from 'recoil';
import App from './App';

export function Main() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

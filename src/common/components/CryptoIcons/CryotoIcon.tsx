import React from 'react';
// @ts-ignore
import CryptocurrencyIcon from 'rn-crypto-icons';

interface CryptoIconProps {
  currency: string;
}

export function CryptoIcon(props: CryptoIconProps) {
  const {currency} = props;

  if (currency) {
    return <CryptocurrencyIcon name={currency.toLowerCase()} size={48} />;
  }
  return null;
}

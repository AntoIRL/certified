import React, { createContext, useState, useEffect } from 'react';
import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';

const TezosContext = createContext();

const TezosProvider = ({ children }) => {
  const [Tezos, setTezos] = useState(new TezosToolkit('https://api.ghost.tzstats.com'));
  const [wallet, setWallet] = useState(new BeaconWallet({ name: 'Certified' }));
  return (
    <TezosContext.Provider value={{ Tezos, wallet, setTezos, setWallet }}>
      {children}
    </TezosContext.Provider>
  );
};

export { TezosContext, TezosProvider };

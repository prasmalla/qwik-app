import { type Signal, component$, useSignal, Slot } from '@builder.io/qwik';
import {
  useContext,
  useContextProvider,
  createContextId,
} from '@builder.io/qwik';
import { Config, PublicClient, WebSocketPublicClient } from '@wagmi/core';
import { FallbackTransport } from 'viem';
import { config } from './wagmi';

export const WagmiContext = createContextId< Signal< Config<PublicClient<FallbackTransport>, WebSocketPublicClient> > >(
  "Wagmi"
);

export default component$(() => {
  const wagmiConfig = useSignal(config);
  useContextProvider(WagmiContext, wagmiConfig);
  return (
    <>
        <Slot />
    </>
  );
});
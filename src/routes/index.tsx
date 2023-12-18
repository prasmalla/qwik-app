import { component$, noSerialize, useContext, useContextProvider, useStore } from "@builder.io/qwik";
import { Config, connect, disconnect, getAccount, sepolia, signMessage } from "@wagmi/core";
import { WagmiContext } from "~/components/web3/wagmi/WagmiProvider";
import { metamask } from "~/components/web3/wagmi/wagmi";

export default component$(() => {
  const wagmi = useContext(WagmiContext)

  const {address} = getAccount()

  console.log(address)
  return (
    <>
      <div>WEB 3</div>
      <div>
        <p>Chain: <span></span></p>
        <p>Address: <span>{address}</span></p>
      </div>
      {/* {(!wallet.getAddresses()) ? <Button /> : <ButtonDisconnect />} */}
      <Button />
      <ButtonDisconnect />
      <ButtonSign />
      {/* <Counter /> */}
    </>
  );
});

export const Button = component$(() => {

  return <button onClick$={async() => {
    await connect({connector: metamask})
  }}>Connect</button>;
});

export const ButtonDisconnect = component$(() => {
  // const wagmi = useContext(WagmiContext)

  return <button onClick$={async() => await disconnect() }>Disconnect</button>;
});

export const ButtonSign = component$(() => {
  return <button onClick$={async() => await signMessage({
    message: 'gm wagmi frens',
  })}>Sign</button>;
}); 

export const Counter = component$(() => {
  const store = useStore({ count: 0 });
 
  return <button onClick$={() => store.count++}>{store.count}</button>;
});
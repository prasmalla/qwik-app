import { createConfig, configureChains, mainnet, sepolia } from "@wagmi/core";
import { publicProvider } from "@wagmi/core/providers/public";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";

export const { chains, publicClient } = configureChains(
    [sepolia, mainnet],
    [publicProvider()]
);

export const metamask = new MetaMaskConnector({
    chains,
    options: {
        shimDisconnect: true,
    },
});

export const config = createConfig({
    autoConnect: true,
    connectors: [metamask],
    publicClient,
});

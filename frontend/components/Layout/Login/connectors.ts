import { UAuthConnector } from '@uauth/web3-react'
import type { AbstractConnector } from '@web3-react/abstract-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

// Instanciate your other connectors.
export const injected = new InjectedConnector({ supportedChainIds: [1, 137] })

export const walletconnect = new WalletConnectConnector({
    infuraId: process.env.REACT_APP_INFURA_ID!,
    qrcode: true,
})

export const uauth = new UAuthConnector({
    clientID: process.env.REACT_APP_CLIENT_ID!,
    redirectUri: process.env.REACT_APP_REDIRECT_URI!,
    // Scope must include openid and wallet
    scope: 'openid wallet humanity_check',

    // Injected and walletconnect connectors are required
    connectors: { injected, walletconnect },
})

const connectors: Record<string, AbstractConnector> = {
    injected,
    walletconnect,
    uauth,
}

export default connectors
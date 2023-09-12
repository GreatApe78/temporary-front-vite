import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThirdwebProvider, metamaskWallet} from "@thirdweb-dev/react";
import { ContractProvider } from './contexts/ContractContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider supportedWallets={[metamaskWallet()]} activeChain={"fantom-testnet"}>
      <ContractProvider>
        <App />
      </ContractProvider>
     </ThirdwebProvider>
  </React.StrictMode>,
)

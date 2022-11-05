import styles from 'styles/Home.module.scss'
import Link from 'next/link'
import { ThemeToggleButton, ThemeToggleList } from 'components/Theme'
import { useState } from 'react'
import { useNetwork, useSwitchNetwork, useAccount, useBalance } from 'wagmi'
import ConnectWallet from 'components/Connect/ConnectWallet'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useConnectModal, useAccountModal, useChainModal } from '@rainbow-me/rainbowkit'
import { useSignMessage } from 'wagmi'
import AuctionApp from '../components/AuctionApp'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <Header />
      <AuctionApp />
    </div>
  )
}

function SignMsg() {
  const [msg, setMsg] = useState('Dapp Starter')
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: msg,
  })
  const signMsg = () => {
    if (msg) {
      signMessage()
    }
  }

  return (
    <>
      <p>
        <input value={msg} onChange={e => setMsg(e.target.value)} className="rounded-lg p-1" />
        <button
          disabled={isLoading}
          onClick={() => signMsg()}
          className="ml-1 rounded-lg bg-blue-500 py-1 px-2 text-white transition-all duration-150 hover:scale-105"
        >
          Sign
        </button>
      </p>
      <p>
        {isSuccess && <span>Signature: {data}</span>}
        {isError && <span>Error signing message</span>}
      </p>
    </>
  )
}

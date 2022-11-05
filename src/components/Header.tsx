import React from 'react'
import Link from 'next/link'
import { ThemeToggleButton, ThemeToggleList } from 'components/Theme'
import { useNetwork, useSwitchNetwork, useAccount, useBalance } from 'wagmi'
import ConnectWallet from 'components/Connect/ConnectWallet'
import { useConnectModal, useAccountModal, useChainModal } from '@rainbow-me/rainbowkit'

type Props = {}

const Header = (props: Props) => {
  const { address, isConnected, connector } = useAccount()
  const { chain, chains } = useNetwork()
  const { isLoading: isNetworkLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
  const { data: balance, isLoading: isBalanceLoading } = useBalance({
    addressOrName: address,
  })
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { openChainModal } = useChainModal()
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            BidDAO
          </Link>
          <Link href="/auctions">Auctions List</Link>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <ConnectWallet />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header

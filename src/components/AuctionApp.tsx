import React, { useState, useEffect } from 'react'
import BidCard from './BidCard'
import { useContractRead, useContractEvent, useContract, useAccount } from 'wagmi'
import AuctionABI from '../contracts/abi/Auction.json'
import { AuctionContractAddress } from '../constants'
import { ethers } from 'ethers'
type Props = {}

const AuctionApp = (props: Props) => {
  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <h1 className="my-10 text-4xl font-semibold text-white">US Constitution DAO</h1>
      <BidCard />
      <BidsList />
    </div>
  )
}

export default AuctionApp

const fakeBidsData = [
  {
    address: '0x57....7186',
    date: '2022-05-11 20:16:11',
    isPubKeyShowed: true,
    isPrivateKeyShowed: false,
  },
  {
    address: '0x57....6632',
    date: '2022-05-11 20:16:11',
    isPubKeyShowed: true,
    isPrivateKeyShowed: true,
  },
  {
    address: '0x57....8752',
    date: '2022-05-11 20:16:11',
    isPubKeyShowed: true,
    isPrivateKeyShowed: true,
  },
]

function BidsList() {
  const { isConnected } = useAccount()
  const { data, isError, isLoading } = useContractRead({
    abi: AuctionABI,
    functionName: 'bidCount',
    args: [],
    address: AuctionContractAddress,
  })

  const [previousLogs, setPreviousLogs] = useState([])

  const listener = async (bidder, encryptedBidAmount, encryptedMaxPrice) => {
    setPreviousLogs([...previousLogs, { bidder, encryptedBidAmount, encryptedMaxPrice }])
  }

  useContractEvent({
    address: AuctionContractAddress,
    abi: AuctionABI,
    eventName: 'BidSubmitted',
    listener,
    chainId: 1337,
  })

  //TODO: Look for all Events
  //      Not just recent

  // const contract = useContract({
  //   address: AuctionContractAddress,
  //   abi: AuctionABI,
  // })
  // useEffect(() => {
  //   async function getPreviousLogs() {
  //     // Create a filter to get the logs
  //     const filter = contract.filters.BidSubmitted()

  //     // Get the logs using the filter
  //     try {
  //       const logs = await contract.queryFilter(filter)
  //       setPreviousLogs(logs)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  //   if (contract) getPreviousLogs()
  // }, [contract, isConnected])

  return (
    <div>
      <h2 className="my-10 text-3xl font-semibold">Recent Bids List</h2>
      {/* <p className="my-10 text-3xl font-semibold">Current Count {!isLoading ? data?.toString() : ''}</p> */}

      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Wallet</th>
              {/* <th>Date</th> */}
              <th>Public Key</th>
              <th>Private Key</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {previousLogs.map(bidder => {
              return (
                <>
                  <tr>
                    <td>{bidder.bidder}</td>
                    <th>
                      <input type="checkbox" className="checkbox" checked={bidder.isPubKeyShowed} />
                    </th>

                    <th>
                      <input type="checkbox" className="checkbox" checked={bidder.isPrivateKeyShowed} />
                    </th>
                    <th>
                      <button className="btn-ghost btn-xs btn">Bid</button>
                    </th>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function NewBidCard() {
  return (
    <div>
      <h1 className="my-10 text-4xl font-semibold">New Bids Card</h1>
    </div>
  )
}

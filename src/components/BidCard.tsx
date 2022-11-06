import React, { useState } from 'react'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import AuctionABI from '../contracts/abi/Auction.json'
import { AuctionContractAddress } from '../constants'
import { BigNumber } from 'ethers'

type Props = {}

function BidCard({}: Props) {
  const [state, setState] = useState({
    maxPrice: '',
    lowestPrice: '',
    yourBid: '',
  })

  const { config } = usePrepareContractWrite({
    address: AuctionContractAddress,
    abi: AuctionABI,
    functionName: 'bid',
    args: [
      state.lowestPrice,
      state.maxPrice,
      [
        BigNumber.from('16458485696251885551355639957530174090889086483654916659049654064176751277442'),
        BigNumber.from('11905005955996943604353133872369871572390073671670841722164044387662524389070'),
      ],
    ],
  })
  const { write } = useContractWrite(config)
  // const { isLoading, isSuccess } = useWaitForTransaction({
  //   hash: data?.hash,
  // })
  return (
    <>
      <div className="card w-full bg-base-300">
        <div className="card-body">
          <div className="grid grid-cols-2 gap-4">
            <div className="avatar">
              <div className="w-96 rounded-xl">
                <img src="https://imageio.forbes.com/specials-images/imageserve/61932219d5deb7f84d029254/0x0.jpg?format=jpg&width=600" />
              </div>
            </div>

            <div>
              <h2 className="card-title mb-10">Live Auction</h2>
              <input
                type="number"
                placeholder="Max Price"
                className="input  my-2 w-full max-w-xs"
                value={state.maxPrice}
                onChange={e => setState({ ...state, maxPrice: e.target.value })}
              />
              <input
                type="number"
                placeholder="Lowest Price"
                className="input my-2 w-full max-w-xs"
                value={state.lowestPrice}
                onChange={e => setState({ ...state, lowestPrice: e.target.value })}
              />
              {/* <input
                type="number"
                placeholder="Your Bid"
                className="input my-2 w-full max-w-xs"
                value={state.yourBid}
                onChange={e => setState({ ...state, maxPrice: e.target.value })}
              /> */}
              <p className="mt-4">Your Locked / Balance</p>
              <progress className="progress progress-accent w-56" value="70" max="100"></progress>
              <div className="card-actions mt-8 justify-end">
                <button className="btn-primary btn" disabled={!write} onClick={() => write?.()}>
                  Bid Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BidCard

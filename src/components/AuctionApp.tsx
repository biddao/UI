import React from 'react'

type Props = {}

const AuctionApp = (props: Props) => {
  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <h1 className="my-10 text-4xl font-semibold">US Constitution DAO</h1>
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
  return (
    <div>
      <h2 className="my-10 text-3xl font-semibold">Bids List</h2>
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Wallet</th>
              <th>Date</th>
              <th>Public Key</th>
              <th>Private Key</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fakeBidsData.map(bidder => {
              return (
                <>
                  <tr>
                    <td>{bidder.address}</td>
                    <td>{bidder.date}</td>
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

import Link from 'next/link'
import React from 'react'

type Props = {}
const auctionsData = [
  {
    name: 'US Constitution',
    desc: 'An original copy of the United States Constitution.',
    img: 'https://imageio.forbes.com/specials-images/imageserve/61932219d5deb7f84d029254/0x0.jpg?format=jpg&width=600',
  },
]

function AuctionList({}: Props) {
  return (
    <>
      {auctionsData.map(auction => {
        return (
          <>
            <div className="card w-96 bg-base-300 shadow-xl">
              <figure>
                <img src={auction.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{auction.name}</h2>
                <p>{auction.desc}</p>
                <div className="card-actions justify-end">
                  <Link href='/'>
                  <button className="btn-primary btn">Bid Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default AuctionList

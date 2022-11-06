import React from 'react'

type Props = {}

function BidCard({}: Props) {
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
              <input type="number" placeholder="Max Price" className="input  my-2 w-full max-w-xs" />
              <input type="number" placeholder="Lowest Price" className="input my-2 w-full max-w-xs" />
              <input type="number" placeholder="Your Bid" className="input my-2 w-full max-w-xs" />
              <p className="mt-4">Your Bid / Balance</p>
              <progress className="progress progress-accent w-56" value="70" max="100"></progress>
              <div className="card-actions mt-8 justify-end">
                <button className="btn-primary btn">Bid Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BidCard

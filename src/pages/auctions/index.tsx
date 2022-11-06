import React from 'react'
import Header from '../../components/Header'
import AuctionList from '../../components/AuctionList'

type Props = {}

const Auctions = (props: Props) => {
  return (
    <>
      <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
        <Header />
        <h1 className="my-10 text-4xl font-semibold text-white">Auctions List</h1>
        <AuctionList />
      </div>
    </>
  )
}

export default Auctions

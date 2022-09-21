import React from 'react'

const Collectioncard = () => {
  return (
    <div class="nft" className=''>
    <div className="main flex flex-col p-4 w-full" >
      <img className="tokenImage rounded-lg h-64 max-w-full object-cover" src="/dog1.jpg" alt="NFT" />
      <h2>Candlemass</h2>
      <div className="tokenInfo flex items-center justify-between">
        <div class="price">
          <ins>$</ins>
          <p>10.00 USD</p>
        </div>
        <div class="duration">
          <ins>Rarity:</ins>
        </div>
      </div>
      <div></div>
      <div></div>
      <hr />
      <div class="creator">
        <ins>Supply:</ins> 666
      </div>
    </div>
  </div>
  )
}

export default Collectioncard
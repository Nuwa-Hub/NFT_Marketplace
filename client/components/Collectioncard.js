import React from 'react'

const Collectioncard = () => {
  return (
    <div className="nft">
    <div className="main flex flex-col p-4 w-full" >
      <img className="tokenImage rounded-lg h-64 max-w-full object-cover" src="/dog1.jpg" alt="NFT" />
      
      <div className="tokenInfo flex items-center justify-between">
        <div className="price">
          <p className='flex items-center font-bold text-2xl'>Bored Api</p>
        </div>
        <div className="duration absolute right-10 bottom-5">
        <img className="tokenImage rounded-lg h-24 w-24 max-w-full object-cover relative ring-8 ring-neutral-50" src="/dog.jpg" alt="NFT" />
        </div>
      </div>
      <div className="creator">
        <p>Supply:</p> 666
      </div>
    </div>
  </div>
  )
}

export default Collectioncard
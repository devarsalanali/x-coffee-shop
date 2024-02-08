import React from 'react'
import { Button } from '.'
import sampleNft from '../../assets/images/sample-nft.png'
export const NftCard = () => {
  const handleBuy = () => {
    return
  }
  return (
    <div className='col nft-card'>
      <img src={sampleNft} alt='nft' className='nft-card__Image' />
      <h3 className='nft-card__Title'>Item Name</h3>
      <p className='nft-card__Creator'>Creator Name</p>
      <div className='row nft-card__Price'>
        <span>0.4 ETH</span>
        <Button label='Buy Now' variant='primary' onClick={handleBuy} />
      </div>
    </div>
  )
}

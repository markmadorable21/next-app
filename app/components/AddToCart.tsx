'use client'

import React from 'react'

const AddToCart = () => {
  return (
    <div className='btn btn-success'>
      <button onClick={() => alert('Product added to cart!')}>Add to Cart</button>
    </div>
  )
}

export default AddToCart

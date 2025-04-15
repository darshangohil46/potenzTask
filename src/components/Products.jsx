import React from 'react'

export default function Products({ product }) {
  return (
    <>
      {product}
      <div className="product-card">
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p><strong>Price: ${product.price}</strong></p>
        <p>Rating: {product.rating} / 5</p>
        <p>Stock: {product.stock} left</p>
        <p><strong>Category:</strong> {product.category}</p>
      </div>
    </>
  )
}

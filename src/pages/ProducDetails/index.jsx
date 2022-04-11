import React from "react"
import { useSelector } from "react-redux"

function ProducDetails() {
  const oneProducts = useSelector((state) => state.oneProduct)
  const {
    category,
    description,
    image,
    price,
    rating: { rate, count },
    title,
  } = oneProducts
  return (
    <div>
      {title},{rate},{count},{price},{description},{category}
      <img src={image} alt={title} />
    </div>
  )
}

export default ProducDetails

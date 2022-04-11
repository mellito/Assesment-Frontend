import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Loading from "../../components/loading"

function ProducDetails() {
  const [load, setLoad] = useState(true)
  const oneProducts = useSelector((state) => state.oneProduct)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 1000)
  }, [])
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
      {load ? (
        <Loading />
      ) : (
        <div>
          {title},{rate},{count},{price},{description},{category}
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  )
}

export default ProducDetails

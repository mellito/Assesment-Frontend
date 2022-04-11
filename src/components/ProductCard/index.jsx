import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import Countdown from "react-countdown-now"
import { fetchOneProduct } from "../../store/actions"
import { PRODUCT_DETAILS } from "../../Constants/Routes"
import "./ProductCard.css"

function ProductCard(props) {
  const { id, image, title } = props
  const [random, setRandom] = useState(0)
  const [details, setDetails] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 5) + 1)
  }, [])

  const handleLinkCLick = async () => {
    dispatch(fetchOneProduct(id))
  }

  const handleOnComplete = () => {
    setDetails(false)
    setRandom(0)
  }
  return (
    <div className="product-card-container">
      <img src={image} alt={title} />
      <h4>{title}</h4>

      <div className="container__transfer">
        <Countdown
          date={Date.now() + 60000 * random}
          onComplete={handleOnComplete}
        />
        <Link
          className={details ? "active" : "deactive"}
          to={`${PRODUCT_DETAILS}/${id}`}
          onClick={handleLinkCLick}
        >
          Go To Details
        </Link>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ProductCard

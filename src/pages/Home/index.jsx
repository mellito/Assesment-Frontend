import React, { useEffect, useState } from "react"
import "./Home.css"
import { useSelector, useDispatch } from "react-redux"
import Loading from "../../components/loading"
import ProductCard from "../../components/ProductCard"
import { fetchProduct } from "../../store/actions"

function Home() {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const [load, setLoad] = useState(true)

  useEffect(() => {
    dispatch(fetchProduct())
    setTimeout(() => {
      setLoad(false)
    }, 1000)
  }, [])
  return (
    <div>
      {load ? (
        <Loading />
      ) : (
        <div className="Home-container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home

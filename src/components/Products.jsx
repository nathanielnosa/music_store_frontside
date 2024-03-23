import { useEffect, useState } from "react"
import { featuredProducts } from "../lib/data"
import Product from "./Product"
import { toast } from 'react-hot-toast'

const Products = ({ collection, filters, sorts }) => {
  const [product, setProduct] = useState([])
  const [filteredProduct, setFilteredProduct] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getMusic = await fetch(
          collection ? `${import.meta.env.VITE_SERVER_URL}/product?collection=${collection}`
            : `${import.meta.env.VITE_SERVER_URL}/product`)
        const result = await getMusic.json()
        setProduct(result)
      } catch (error) {
        toast.error(error.message)
      }
    }
    fetchData()
  }, [collection])

  useEffect(() => {
    collection && setFilteredProduct(
      product.filter(item => Object.entries(filters).every(([key, value]) => item[key] && item[key].includes(value)))
    )
  }, [product, collection, filters])

  useEffect(() => {
    if (sorts === "newest") {
      setFilteredProduct(prev => (
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      ))
    } else if (sorts === "low") {
      setFilteredProduct(prev => (
        [...prev].sort((a, b) => a.price - b.price)
      ))
    } else {
      setFilteredProduct(prev => (
        [...prev].sort((a, b) => b.price - a.price)
      ))
    }
  }, [sorts])
  return (
    <section id="pro">
      <div className="container-fluid py-3">

        <div className="row g-3">

          {collection ? filteredProduct.map((product) => (
            <div className="col-md-3" key={product.id} >
              <Product product={product} />
            </div>
          )) : product.slice(0, 8).map((product) => (
            <div className="col-md-3" key={product.id} >
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
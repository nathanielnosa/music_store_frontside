import { useEffect, useState } from "react"
import Product from "./Product"
import { toast } from 'react-hot-toast'

const Products = ({ collection, filters, sorts }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `${import.meta.env.VITE_SERVER_URL}/product`
        if (collection) {
          url += `?collection=${collection}`
        }
        const response = await fetch(url)
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        toast.error(error.message)
      }
    }
    fetchData()
  }, [collection])

  useEffect(() => {
    if (!collection) {
      setFilteredProducts(products.slice(0, 8))
    } else {
      const filtered = products.filter(item => Object.entries(filters).every(([key, value]) => item[key] && item[key].includes(value)))
      setFilteredProducts(filtered)
    }
  }, [products, collection, filters])

  useEffect(() => {
    if (sorts === "newest") {
      setFilteredProducts(prev => ([...prev].sort((a, b) => a.createdAt - b.createdAt)))
    } else if (sorts === "low") {
      setFilteredProducts(prev => ([...prev].sort((a, b) => a.price - b.price)))
    } else {
      setFilteredProducts(prev => ([...prev].sort((a, b) => b.price - a.price)))
    }
  }, [sorts])

  return (
    <section id="pro">
      <div className="container py-3">
        <div className="row g-3">
          {filteredProducts.map((product) => (
            <div className="col-md-3" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

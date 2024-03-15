import { featuredProducts } from "../lib/data"
import Product from "./Product"


const Products = () => {

  return (
    <section id="pro">
      <div className="container-fluid py-3">
        <h2>FEATURED PRODUCT</h2>
        <div className="row g-3">

          {featuredProducts.map((product) => (
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
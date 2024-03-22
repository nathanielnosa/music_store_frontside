import Collections from "../components/Collections"
import Products from "../components/Products"
import Slider from "../components/Slider"

const Home = () => {
  return (
    <>
      <Slider />
      <Collections />
      <h2>LATEST PRODUCT</h2>
      <Products />
    </>
  )
}

export default Home
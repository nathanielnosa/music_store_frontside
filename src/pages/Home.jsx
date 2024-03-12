import Collections from "../components/Collections"
import Footer from "../components/Footer"
import NewsLetter from "../components/NewsLetter"
import Products from "../components/Products"
import Slider from "../components/Slider"

const Home = () => {
  return (
    <>
      <Slider />
      <Collections />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Home
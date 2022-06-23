import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

export default function Home(props) {
  const {products} = props;
  return (
    <div className="home">
      <ProductGrid handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} searchWord={props.searchWord} category={props.category} products={products}/>
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

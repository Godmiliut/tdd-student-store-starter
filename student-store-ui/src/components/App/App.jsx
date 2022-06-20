import * as React from "react"
import axios from "axios"
import { useEffect } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"
import SubNavbar from "../SubNavbar/SubNavbar"
import "./App.css"

export default function App() {
  const [products,setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState("");
  const [error, setError] = React.useState("");
  const [isOpen, setIsOpen] = React.useState("");
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm,setCheckoutForm]= React.useState([]);
  const [category,setCategory]=React.useState("");
  const [searchWord, setSearchWord]=React.useState("");

  React.useEffect(() =>{
    axios.get("https://codepath-store-api.herokuapp.com/store").then(
      (response) =>{
        setIsFetching(true);
        setProducts(response.data.products);
      },
      (err) =>{
        setIsFetching(false);
        setError(err);
      }
    )
    }, [])
  function handleOnToggle(){
    if(isOpen==""){
      setIsOpen(false);
    }
    setIsOpen(!isOpen);
  }
  function handleAddItemToCart(productId){
    console.log(products);
  }

  function handleRemoveItemFromCart(productId){
    console.log(products);
  }

  function handleOnCheckoutFormChange(name, value){
    setCheckoutForm(name, value);
  }

  function handleOnSubmitCheckoutForm(){
    axios.post("https://codepath-store-api.herokuapp.com/store",{
     
    })
  }
  return (
    <div className="app">
      <BrowserRouter>
        <main>
        <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} shoppingCart={shoppingCart}/>
        <Navbar />
        <Hero/>
        <SubNavbar category={category} setCategory={setCategory} searchWord={searchWord} setSearchWord={setSearchWord}/>
        <Routes>
            {/* YOUR CODE HERE! */}
            <Route path='/' element={<Home products={products} category={category} searchWord={searchWord}/>} />
            <Route path='/products/:productId' element={<ProductDetail products={products}/>} />
            <Route path='*' element={<NotFound />}/>
        </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

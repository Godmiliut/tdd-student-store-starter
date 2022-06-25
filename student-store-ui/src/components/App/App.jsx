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
  const [checkoutForm,setCheckoutForm]= React.useState({email: "", name: ""});
  const [category,setCategory]=React.useState("");
  const [searchWord, setSearchWord]=React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [receipt, setReceipt] = React.useState({});

  React.useEffect(() =>{
    axios.get("http://localhost:3001/store/").then(
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
    let shoppingProducts=[...shoppingCart];
    let alreadyThere= false;
    if(shoppingProducts.length > 0){
      let i = 0;
      while(i < shoppingProducts.length && alreadyThere == false){
        if(shoppingProducts[i].itemId == productId){
          let newQty = shoppingProducts[i].quantity + 1;
          shoppingProducts[i] = {
            itemId: productId,
            quantity: newQty
          };
          setShoppingCart(shoppingProducts);
          alreadyThere= true;
        }
        i++;
      }
    }
    if(alreadyThere == false){
      let shoppingProduct=""
      shoppingProduct={
        itemId: productId,
        quantity: 1
      }
      setShoppingCart(shoppingCart => [...shoppingCart, shoppingProduct]);
    }
  }
  
  function handleRemoveItemFromCart(productId){
    let shoppingProducts=[...shoppingCart];
    if(shoppingProducts.length > 0){
      let i= 0;
      while(i < shoppingProducts.length ){
        if(shoppingProducts[i].itemId == productId){
          let newQty= shoppingProducts[i].quantity - 1;
          shoppingProducts[i] = {
            itemId: productId,
            quantity: newQty
          }
          if(shoppingProducts[i].quantity < 1){
            shoppingProducts.splice(i,1);
          }
        }
        i++;
      }
      setShoppingCart(shoppingProducts);
    }
  }

  function handleOnCheckoutFormChange(name, value){
    setCheckoutForm({...checkoutForm, [name]: value})
  }

  async function handleOnSubmitCheckoutForm(){
    console.log(checkoutForm);
    console.log(shoppingCart);
    axios.post("http://localhost:3001/store/",{user: checkoutForm, shoppingCart: shoppingCart}).then(
      (response) =>{
        setReceipt(response.data.purchase.receipt);
        setShoppingCart([]);
        setCheckoutForm({});
        setSuccess(true);
       
      },
      (err) =>{
        setError(err);
        setSuccess(false);
      }
    )
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
        <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} products={products} shoppingCart={shoppingCart} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} success={success} error={error} receipt={receipt}/>
        <Navbar />
        <Hero/>
        <SubNavbar category={category} setCategory={setCategory} searchWord={searchWord} setSearchWord={setSearchWord}/>
        <Routes>
            {/* YOUR CODE HERE! */}
            <Route path='/' element={<Home handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} products={products} category={category} searchWord={searchWord} shoppingCart={shoppingCart}/>} />
            <Route path='/products/:productId' element={<ProductDetail products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart}/>} />
            <Route path='*' element={<NotFound />}/>
        </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

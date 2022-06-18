import * as React from "react"
import "./SubNavbar.css"
export default function SubNavBar(props) {
  
  function handleOnChange(e){
    props.setSearchWord(e.target.value);
  }

  return (
    <nav className="sub-navbar">
    <div className="content">
      <div className="row">
        <div className="search-bar">
            <input type="text" onChange={handleOnChange} name="search" placeholder="Search" ></input>
            <i className="material-icons">search</i>
        </div>
        <div className="links">
            <span className="help">
                <i className="material-icons">help</i>
                Help
            </span>
            <div className="cart">
                My Cart
                <i className="material-icons">shopping_cart</i>
            </div>
        </div>
      </div>
      <div className="row">
        <ul className="category-menu">
            <li className="">
                <button onClick={() => {props.setCategory("")}}>All Categories</button>
            </li>
            <li className="">
                <button onClick={() => {props.setCategory("clothing")}}>Clothing</button>
            </li>
            <li className="">
                <button onClick={() => {props.setCategory("food")}}>Food</button>
            </li>
            <li className="">
                <button onClick={() => {props.setCategory("accessories")}}>Accessories</button>
            </li>
            <li className="">
                <button onClick={() => {props.setCategory("tech")}}>Tech</button>
            </li>
        </ul>
      </div>
    </div>
    </nav>
  )
}

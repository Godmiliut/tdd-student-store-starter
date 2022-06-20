import * as React from "react";
import "./Sidebar.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar(props) {
  let sName="";
  let bName="";
  if(props.isOpen== false){
    sName="sidebar closed";
    bName="toggle-button button closed";
  }
  else{
    sName="sidebar open";
    bName="toggle-button button open"
  }
  return (
    <section className={sName}>
      <div className="wrapper">
        <button className={bName} onClick={props.handleOnToggle}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <ShoppingCart isOpen={props.isOpen} shoppingCart={props.shoppingCart}/>
      </div>
    </section>
  )
}

import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart(props) {
  return (
    <div className="shopping-cart">
        {props.isOpen == false ?
            <div className="cart-icons">
                <span className="cart-icon icon button">
                    <i className="material-icons md-48">add_shopping_cart</i>
                </span>
                <span className="cart-icon icon button">
                    <i className="material-icons md-48">monetization_on</i>
                </span>
                <span className="cart-icon icon button">
                    <i className="material-icons md-48">fact_check</i>
                </span>
            </div>
         :
            <div className="open">
                <h3>Shopping Cart
                    <span className="button">
                        <i className="material-icons md-48">add_shopping_cart</i>
                    </span>
                </h3>
                { props.shoppingCart.length < 1 ? 
                    <div className="notification">No items added to cart yet. Start shopping now!</div>
                :
                    <div className="CartTable">
                        <div className="header">
                            <div className="header-row">
                                <span className="flex-2">Name</span>
                                <span className="center">Quantity</span>
                                <span className="center">Unit Price</span>
                                <span className="center">Cost</span>
                            </div>
                            <div className="product-row">
                                
                            </div>
                        </div>
                    </div>
                }
                
            </div>
         }
    
  </div>
  )
}
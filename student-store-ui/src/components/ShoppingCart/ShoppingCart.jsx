import * as React from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./ShoppingCart.css"

export default function ShoppingCart(props) {
    let total = 0;
    let tax= 0;
    let final= 0;
    
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
                            
                            {props.shoppingCart.map((product) =>{
                                total += props.products[product.itemId - 1].price * product.quantity;
                                tax = (total * .0875).toFixed(2);
                                final = total;
                                final += total * .0875;
                                return(
                                <div className="product-row">
                                <span className="flex-2 cart-product-name">{props.products[product.itemId - 1].name}</span> 
                                <span className="center cart-product-quantity">{product.quantity}</span> 
                                <span className="center cart-product-price">${props.products[product.itemId - 1].price}</span>
                                <span className="center cart-product-subtotal">${props.products[product.itemId - 1].price * product.quantity}</span>
                                </div>
                            )})}
                            
                        </div>
                        <div className="receipt">
                            <div className="receipt-subtotal">
                                <span className="label">Subtotal</span>
                                <span></span>
                                <span></span>
                                <span className="center subtotal">${total}</span>
                            </div>
                            <div className="receipt-taxes">
                                <span className="label">Taxes and Fees</span>
                                <span></span>
                                <span></span>
                                <span className="center">${tax}</span>
                            </div>
                            <div className="receipt-total">
                                <span className="label">Total</span>
                                <span></span>
                                <span></span>
                                <span className="center total-price">${final.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                }
                <CheckoutForm isOpen={props.isOpen} shoppingCart={props.shoppingCart} checkoutForm={props.checkoutForm} handleOnCheckoutFormChange={props.handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm} success={props.success} receipt={props.receipt} error={props.error}/>
            </div>
         }
    
  </div>
  )
}
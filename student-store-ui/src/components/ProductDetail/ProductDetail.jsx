import * as React from "react"
import "./ProductDetail.css"
import ProductView from "../ProductView/ProductView"
import { useParams } from "react-router-dom"

export default function ProductDetail(props) {
    const [product, setProduct] = ("");
    const {productId} = useParams();
    var qty= 0;
    props.shoppingCart.forEach((element) => {
      if(element.itemId == (productId)){
        qty= element.quantity;
      }
    })
  return (
    <div className="product-detail">
      <ProductView product={props.products[productId - 1]} quantity={qty} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} />
    </div>
  )
}
import * as React from "react"
import "./ProductDetail.css"
import ProductView from "../ProductView/ProductView"
import { useParams } from "react-router-dom"

export default function ProductDetail(props) {
    const [product, setProduct] = ("");
    const {productId} = useParams();
  return (
    <div className="product-detail">
      <ProductView product={props.products[productId - 1]}/>
    </div>
  )
}
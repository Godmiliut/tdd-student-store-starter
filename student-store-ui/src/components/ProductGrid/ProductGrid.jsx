import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function ProductGrid(props) {
  const {products} = props;
  let actualProducts = {};

  if(props.category == ""){
    actualProducts= products;
  }else{
    actualProducts= products.filter(product =>{
      return product.category == props.category;
    })
  }

  if(props.searchWord.length > 0){
    actualProducts= actualProducts.filter(product =>{
      return product.name.toLowerCase().indexOf(props.searchWord.toLowerCase()) >= 0;
    })
  }
  
  return (
    <div id="productGrid" className="product-grid">
      <div className="content">
        <h3>Best Selling Products</h3>
        <div className="grid">
        {actualProducts.map((product,index)=> {
          let quantity= props.shoppingCart.find(item => item.itemId == product.id);
          quantity= quantity ? quantity.quantity : 0;
        return <ProductCard key={index} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} product={product} productId={product.id} showDescription={false} quantity={quantity}/>})}
        </div>
      </div>
    </div>
  )
}
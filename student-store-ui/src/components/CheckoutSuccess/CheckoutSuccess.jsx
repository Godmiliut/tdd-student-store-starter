import * as React from "react"
import "./CheckoutSuccess.css"

export default function CheckoutSuccess(props) {
  return (
    <div className="checkout-success">
        <h3>
            Checkout Info
            <span className="icon button">
                <i className="material-icons md-48">fact_check</i>
            </span>
        </h3>
        { props.success ?
    
        <div className="card">
            <header className="card-head">
                <h4 className="card-title">Receipt</h4>
            </header>
            <section className="card-body">
                <ul>
                    Success!
                    {props.receipt.map((item, index) =>{
                        return(
                            <li>{item}</li>
                        )
                    })}
                </ul>
            </section>
        </div>

        : 
            props.error == "" ? 
            <div className="content">
                <p>
                    A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.
                </p>
            </div> :
            
            <p className="error">Error!</p>
        
        }
        
        
    </div>
  )
}
import * as React from "react"
import "./CheckoutForm.css"
import CheckoutSuccess from "../CheckoutSuccess/CheckoutSuccess"

export default function CheckoutForm(props) {
  return (
    <div className="checkout-form">
      <h3>
        Payment Info
        <span className="button">
          <i className="material-icons md-48">monetization_on</i>
        </span>
      </h3>
      <div className="input-field">
        <label className="label">Email</label>
        <div className="control">
          <input name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" defaultValue={props.checkoutForm.email} onChange={(evt) =>{props.handleOnCheckoutFormChange(evt.target.name, evt.target.value)}}></input>
        </div>
      </div>
      <div className="input-field">
        <label className="label">Name</label>
        <div className="control">
          <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" defaultValue={props.checkoutForm.name} onChange={(evt)=>(props.handleOnCheckoutFormChange(evt.target.name, evt.target.value))}></input>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input name="termsAndConditions" type="checkbox"></input>
            <span className="label">
              I agree to the 
              <a className="terms" href="#terms-and-conditions"> terms and conditions</a>
            </span>
          </label>
        </div>
      </div>
      <p className="is-danger"></p>
      <div className="field">
        <div className="control">
          <button className="button checkout-button" onClick={props.handleOnSubmitCheckoutForm}>Checkout</button>
        </div>
      </div>
      <CheckoutSuccess success={props.success} name={props.checkoutForm.name} email={props.checkoutForm.email} receipt={props.receipt} error={props.error}/>
    </div>
  )
}
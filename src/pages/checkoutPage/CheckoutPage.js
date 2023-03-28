import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Checkout = (props) => {
        const [total, setTotal] = useState();
    
        useEffect(() => {
            setTotal(props.basket.reduce((acc, curr) => acc + Number(curr.price), 0))
        }, [props.basket])
    
        return (
    
            <div id='checkoutBox'> <div id="checkoutGrid">
    
    
                <div className='Titles'>
                    <h1 id="shoppingtitle">Shopping Basket</h1>
    
    
                    <div id='itemsBox'>
                        {props.basket.map((recipe, index) => {
                            return (
    
                                <div key={index} className="checkoutCatBoxes">
                                    <div className="basketItemNames">
                                        <p>{recipe.title}</p>
                                    </div>
                                    <div className="basketItemPrice">
                                        <p>£{recipe.pricePerServing.toFixed(2/10)/10}</p>
                                    </div>
                                    <button className="basketRemoveButton">
                                        &times;
                                    </button>
                                </div>
                            )
                        })}
                    </div>
    
                    <h2 id='paybelow'>Pay below</h2>
    
    
                    <div className='payimages'>
                        <img id="payImages" src=".\images\Paypal-logo.png" alt="visaImage" />
                        <img id="payImages" src="/images/VISA-symbol.jpg" alt="visaImage" /></div>
    
                    <div>
                        <h2 id='delivery'>Delivery Address:</h2>
                    </div>
    
                    <input className='deliveryDetails' placeholder='Fill in details..'>
                    </input>
                </div>
    
                <div id='BuybuttonBox'>
                    <div id='texts'>
                        <button className='BuyButton' type="button" disabled={props.basket.length===0}>Buy now</button>
                        <div className="filters summary">
                <span className="title">Subtotal ({props.basket.length}) items</span>
                <p style={{ fontWeight: 700, fontSize: 20}}>Total: £ {total}</p>
                </div>
                    </div>
                </div>
    
            </div>
            </div>
    
        )
    }
    
   export default Checkout;


import React, { Component } from "react";
import "./App.css";
class creditcard extends Component {
    render() { 
        return ( 
            <div className='credit-card-style'>
               <p className='title'>CREDIT CARD</p>
               <img className="puce" src={require("./puce.png")} />
            <div className='creditcard-information'>
                <div >
                     <p className='pass-number'>7253 3256 7895 1245</p>
                     <div className='infos'>
                     <div className='pass'>
                     <p> 5422</p>
                     <p> CARDHOLDER</p>
                     </div>
                     <div className='year'>
                     <p>Month/Year</p>
                     <p className='number'>11/50</p>
                     </div>
                     </div>
                </div>
                <div>
                      <img className="mastercard" src={require("./masterCard.png") }/>
                </div>

            </div>
    </div>
         );
    }
}
 
export default creditcard;
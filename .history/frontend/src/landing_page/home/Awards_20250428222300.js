import React from 'react';
function Awards () {
    return ( 
       <div className='container mt-5'>
          <div className='row'> {/* col-6 half to both parts as total = 12*/ }
             <div className='col-6'>
                <img src='media/images/largestBroker.svg'/>
             </div>
             <div className='col-6'>
                <h1>Largest stock broker in India</h1>
                <p>2+ million Zerodha Clients contribute to over 15% of all retail order volumes in India daily by tading and investing in:</p>
                <div className='row'>
                   <div className='col-6'>
                       <ul>
                          <li>Future and Options</li>
                          <li>Commodity Derivatives</li>
                          <li>Currency Derivatives</li>
                       </ul>
                   </div>
                   <div className='col-6'>
                       <ul>
                          <li>stocks</li>
                          <li>Commodity Derivatives</li>
                          <li>Currency Derivatives</li>
                       </ul>
                   </div>
                </div>
             </div>
          </div>
       </div>
     );
}

export default Awards ;

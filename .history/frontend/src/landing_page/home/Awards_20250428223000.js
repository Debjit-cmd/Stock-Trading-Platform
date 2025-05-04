import React from 'react';
function Awards () {
    return ( 
       <div className='container mt-5'>
          <div className='row'> {/* col-6 half to both parts as total = 12*/ }
             <div className='col-6 p-5'>
                <img src='media/images/largestBroker.svg'/>
             </div>

             <div className='col-6 p-5 mt-3'>
                <h1>Largest stock broker in India</h1>
                <p className='mb-5'>2+ million Zerodha Clients contribute to over 15% of all retail order volumes in India daily by tading and investing in:</p>
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
                          <li>Stocks & IPOs</li>
                          <li>Direct Mutual Funds</li>
                          <li>Bonds & Growth</li>
                       </ul>
                   </div>
                </div>
                <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
             </div>
          </div>
       </div>
     );
}

export default Awards ;

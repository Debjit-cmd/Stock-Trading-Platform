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
             </div>
          </div>
       </div>
     );
}

export default Awards ;

import React from 'react';
function Hero() {
    return (
        <div className='container p-5'>
          <div className='row text-center'>
             <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
             <h1 className='mt-5'> Invest in Everything</h1>
             <p>Online Platform to invest in stocks,derivatives,mutual funds and more</p>
             <button style={{width:"30%",margin:""}}>SignUp</button>
          </div>
           
        </div>
      );
}

export default Hero;
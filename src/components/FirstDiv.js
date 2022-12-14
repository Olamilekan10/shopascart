import React from 'react'
import '../App.css';
import img1 from '../assets/shop2.png'
import img2 from '../assets/shop3.png'
import img3 from '../assets/shop4.png'
import img4 from '../assets/shop5.png'



function FirstDiv() {
  return (
    <>
        <section id="home">
            <div className="container">
            <h1 style={{color:'#fff', fontWeight:'bold'}}>Get your groceries <br /> delivered same-day</h1>
            <p style={{color:'#fff'}}>Order what you want from grocery stores and local market near you <br /> and get it delivered right to your door.</p>
            <input type="text" className='input pl-4' placeholder='Enter your address' />
            <i class="fa-solid fa-arrow-right"></i>
            </div>
        </section>

       
            <h3 className='text-center pt-5 font-weight-normal'> Favourite Stores in 
                <span className="text-danger pl-2" role={'button'}>Lagos</span>
            </h3>
          <section id="brand">
              <div className="row mx-auto container-fluid m-0 p-0">
                  <div className='text-center mt-4 col-lg-3 col-md-6 col-sm-6'>
                    <img  className='img-fluid mb-3' src={img1} alt="shopping-item"  />
                    <h6>Shoprite</h6>
                    <p>Delivery<span>.</span>Pickup</p>
                  </div>
                  <div className='text-center mt-4 col-lg-3 col-md-6 col-sm-6'>
                    <img  className='img-fluid mb-3' src={img2} alt="shopping-item"  />
                    <h6>Addide</h6>
                    <p>Delivery<span>.</span>Pickup</p>
                  </div>
                  <div className='text-center mt-4 col-lg-3 col-md-6 col-sm-6'>
                    <img  className='img-fluid mb-3' src={img3} alt="shopping-item"  />
                    <h6>Delis</h6>
                    <p>Delivery</p>
                  </div>
                  <div className='text-center mt-4 col-lg-3 col-md-6 col-sm-6'>
                    <img  className='img-fluid mb-3' src={img4} alt="shopping-item"  />
                    <h6>Supermarket</h6>
                    <p>Delivery<span>.</span>Pickup</p>
                  </div>
                  
              </div> 
        </section>
    </>
  )
};

export default FirstDiv;
import React from 'react'
import logo from "./images/logo.png"
import cart from "./images/Screenshot 2024-07-22 140217.png"


function Header() {
  return (
    <div>
      <nav className='container-fluid'>
          <div className='row align-item-center' style={{border:'1px solid grey'}}>
            <div className='col-lg-2 col-4 ps-md-0 py-md-0 py-2' style={{borderRight:'1px solid grey'}}>
              <div className='row'>
                <div className='col-12 mt-2'>
                  <img src={logo}  className='img-fluid' alt="" />
                </div>
              </div>
            </div>
            <div className='col-lg-10 col-8 ps-md-3 py-md-3 py-1'>
              <div className='row'>
                <div className='col-12 d-flex align-items-center justify-content-between'>
                  <div className='col-sm-2 col-12 d-md-block mt-2 d-none' >
                    <div>
                    <p className='fw-bold '>Delivery in 11 minutes</p>
                    <p>Meerut Bypass Rd</p>
                    </div>
                  </div>
                  <div className='col-sm-5 col-12 d-md-block d-none'>
                  <input type="text" placeholder='search' className='w-100 bg-body-secondary border-0 py-3 px-2 rounded-3' />
                  </div>
                  <div className='col-sm-4'>
                    <div className='row'>
                      <div className='col-12 d-flex justify-content-between'>
                        <div className='col-lg-6'>
                        <button type="button" class="btn px-md-5 px-2 py-3 fw-bold border-0" disabled>LOGIN</button>
                        </div>
                        <div className='col-lg-6 ms-md-0 ms-4'>
                        <button type="button" class="btn btn-success px-md-4 px-2 py-3 fw-bold">
                          <img src={cart} alt="" width={30}/><span> My Cart</span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </nav>
    </div>
  )
}

export default Header

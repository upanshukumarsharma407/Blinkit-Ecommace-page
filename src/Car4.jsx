import React from 'react'
import img1 from './images/480932a.jpg'

function Car4() {
  return (
    <div>
      <section>
        <div className='container-fluid py-3'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <h2 className='fw-bold'>Hookah
                </h2>
              </div>
            </div>
            <div className='row py-4'>
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </section>
    </div>

  )

}

export default Car4

function Cards() {
  return (
    <div className='col-lg-2 col-sm-6 col-6 gy-4'> 
      <div className='col-12 border border-black rounded-2 shadow px-4'>

        <div className='row'>
          <div className='col-12 text-center'>
            <img src={img1} alt="" className='img-fluid' />
          </div>
        </div>

        <div className='row'>
          <div className='col-12 lh-1'>
            <p className='text-bg-light p-1'>12-min</p>
            <p style={{fontSize: '12px',fontWeight:'bold'}}>Brain Freeze Up Herbal Hookah Flavor (Tobacco Free) by Soex</p>
            <p>50 g</p>
          </div>
        </div>

        <div className='row align-items-center mb-2'>
          <div className='col-lg-4'>
            <span>₹111</span>
          </div>
          <div className='col-lg-2'>

          </div>
          <div className='col-lg-5'>
            <button type="button" class="btn btn-outline-success">Add</button>
          </div>
        </div>


      </div>
    </div>
  )
}

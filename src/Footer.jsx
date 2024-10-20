import React from 'react'
import img1 from './images/8ed033800ea38f24c4f0.png';
import img2 from './images/d61019073b700ca49d22.png';
import img3 from './images/social.png';

function Footer() {
    return (
        <div>
            <footer>
                <div className='container-fluid'>
                    <div className='container'>
                        <div className='row py-5'>
                            <div className='col-lg-5'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <h5 className='fw-bold'>Useful Links</h5>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-sm-3 col-12'>
                                            <ul style={{ listStyle: 'none' }}>
                                                <li>About</li>
                                                <li>Careers</li>
                                                <li>Blog</li>
                                                <li>Press</li>
                                                <li>Lead</li>
                                                <li>Value</li>
                                            </ul>
                                        </div>

                                        <div className='col-sm-3 col-12'>
                                            <ul style={{ listStyle: 'none' }}>
                                                <li>Privacy</li>
                                                <li>Terms</li>
                                                <li>FAQs</li>
                                                <li>Security</li>
                                                <li>Mobile</li>
                                                <li> Contact</li>
                                            </ul>
                                        </div>

                                        <div className='col-sm-3 col-12'>
                                            <ul style={{ listStyle: 'none' }}>
                                                <li>Partner</li>
                                                <li> Express</li>
                                                <li>  Seller</li>
                                                <li>  Warehouse</li>
                                                <li>  Deliver</li>
                                                <li>  Resources</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <h5>Categories <span style={{ color: 'green' }}>see all</span></h5>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-sm-4 col-12' style={{ fontSize: '15px', lineHeight: '30px' }}>
                                        <ul style={{ listStyle: 'none' }}>
                                            <li>Vegetables & Fruits</li>
                                            <li>Dairy & Breakfast</li>
                                            <li>Munchies</li>
                                            <li> Cold Drinks & Juices</li>
                                            <li>Instant & Frozen Food</li>
                                            <li>Tea, Coffee & Health Drinks</li>
                                            <li>Bakery & Biscuits</li>
                                            <li>Sweet Tooth</li>
                                            <li>Atta, Rice & Dal</li>
                                            <li>Dry Fruits, Masala & Oil</li>
                                            <li>Sauces & Spreads</li>
                                            <li>Chicken, Meat & Fish</li>
                                            <li> Paan Corner</li>
                                        </ul>
                                    </div>

                                    <div className='col-sm-4 col-12' style={{ fontSize: '15px', lineHeight: '30px' }}>
                                        <ul style={{ listStyle: 'none' }}>
                                            <li>Vegetables & Fruits</li>
                                            <li>Dairy & Breakfast</li>
                                            <li>Munchies</li>
                                            <li> Cold Drinks & Juices</li>
                                            <li>Instant & Frozen Food</li>
                                            <li>Tea, Coffee & Health Drinks</li>
                                            <li>Bakery & Biscuits</li>
                                            <li>Sweet Tooth</li>
                                            <li>Atta, Rice & Dal</li>
                                            <li>Dry Fruits, Masala & Oil</li>
                                            <li>Sauces & Spreads</li>
                                            <li>Chicken, Meat & Fish</li>
                                            <li> Paan Corner</li>
                                        </ul>
                                    </div>

                                    <div className='col-sm-4 col-12' style={{ fontSize: '15px', lineHeight: '30px' }}>
                                        <ul style={{ listStyle: 'none' }}>
                                            <li>Vegetables & Fruits</li>
                                            <li>Dairy & Breakfast</li>
                                            <li>Munchies</li>
                                            <li> Cold Drinks & Juices</li>
                                            <li>Instant & Frozen Food</li>
                                            <li>Tea, Coffee & Health Drinks</li>
                                            <li>Bakery & Biscuits</li>
                                            <li>Sweet Tooth</li>
                                            <li>Atta, Rice & Dal</li>
                                            <li>Dry Fruits, Masala & Oil</li>
                                            <li>Sauces & Spreads</li>
                                            <li>Chicken, Meat & Fish</li>
                                            <li> Paan Corner</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-100 bg-light py-2 px-3 d-sm-block d-none'>
                    <div className='row px-2 align-items-center justify-content-between'>
                        <div className='col-lg-4'>
                            <p>© Blink Commerce Private Limited (formerly known as Grofers India Private Limited), 2016-2024</p>
                        </div>
                        <div className='col-lg-4'>
                            <div className='row align-items-center'>
                                <div className='col-4 fw-bold'>
                                    Download App
                                </div>
                                <div className='col-4'>
                                    <img src={img1} alt="" className='img-fluid' />
                                </div>
                                <div className='col-4'>
                                    <img src={img2} alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <img src={img3} alt="" className='img-fluid ms-4' width={400} />
                        </div>
                    </div>
                    <div className='row'>
                        <p style={{fontSize:'20px'}}>“Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
                    </div>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

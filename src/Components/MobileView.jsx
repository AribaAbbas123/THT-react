import React from 'react'
import './Css/MobileView.css'
import Boxes from "./Css/Images/Boxes.png"
import Baloon from "./Css/Images/Baloon Img.png"
import AppleIcon from "./Css/Images/Apple Icon.png"

const MobileView = () => {
    return (
        <>
            <div className='row me-0'>
                <div className='col-sm-6 col-5 position-relative'>
                    <div className='bg-pink-blue-m'>
                    <div className='bg-ava-m'></div>
                    </div>
                </div>
                <div className='col-sm-6 col-7'>
                    <div className='padding-sides-m d-flex justify-content-center align-items-center h-100 flex-column'>
                        <h1 className='extraBold h-1-m'>FINANCES <br />
                            AND  <br />
                            FREEDOM</h1>

                    </div>
                </div>
               
               <div className='col-sm-2 col-1'></div>
                <div className='col-sm-10 col-11 card-gray-m'>
                <div className='box-gray-m p-4 '>
                  <div className='semiBold f-18'>REVENUE</div>
                  <h1 className='f-36-m medium'>32,956</h1>
                  <div className='d-flex justify-content-between align-items-end'>
                    <div><button className='btn-blue medium'>+156%</button></div>
                    <div>
                      <img src={Boxes}/>
                    </div>
                  </div>
                </div>
                </div>
               </div>
               
                <div className='position-relative d-flex justify-content-center'>
                  <div className='heading-btn'></div>     <div className='position-absolute btn-pink'> <button className='heading-btn-style bold'><span className='mx-1'>   <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <circle cx="6.65204" cy="6.50706" r="6" transform="rotate(-8 6.65204 6.50706)" fill="currentColor" />
                  </svg></span>LET’S START</button></div>
                </div>
                <div className='padding-sides-m'>
                <div className='d-flex justify-content-center gap-4 space-para-top'>
              <div className='icon'>
              </div>
              <div className='semiBold gray-para'>Make Plans, save your <br /> income more to 
                save your <br /> life in the future.</div>
            </div>

            <div className='space-card-m '>
              <div className='bg-white'>
                  <div className='p-5 text-center'>
                    <h2 className='medium card-heading'>Download <br />
                      app now</h2>
                    <img src={Baloon} className='py-3' />
                    <p className='semiBold card-p'>14-day trial</p>
                    <div className='position-absolute apple-icon-m'>
                      <img src={AppleIcon} />
                    </div>

                  </div>
                </div>
              </div>

                </div>
             
           
            
        </>
    )
}

export default MobileView
import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Icon from './Css/Images/Icon.png'
import Avator from './Css/Images/Avatar img.png'
import AvatarDark from "./Css/Images/AvatarDark.png"
import Baloon from "./Css/Images/Baloon Img.png"
import AppleIcon from "./Css/Images/Apple Icon.png"
import Boxes from "./Css/Images/Boxes.png"
import MobileView from './MobileView'

const LightMode = () => {
  
  let Ctheme = localStorage.getItem('theme')
  const [userImg, setuserImg] = useState(Ctheme && Ctheme === 'dark' ? AvatarDark : Avator);

  useEffect(() => {
    console.log(Ctheme);

    if (Ctheme && Ctheme === 'dark') {
      document.body.setAttribute('dark', '');
      setuserImg(AvatarDark);
    }
   else {
      setuserImg(Avator);
    }
  


  }, [Ctheme])

  return (
    <>

      <div className='padding-sides'>
        <Navbar />
        {/* largeScreen */}
        <div className='banner-space largeScreen'>
        <div className='row g-0 '>
          <div className='col-xxl-7 col-xl-6 col-lg-6 col-md-6' >
            <div>
              <h1 className='h-1 bold'>FINANCES</h1>
              <div className='d-flex align-items-center gap-xxl-5 gap-xl-5 gap-lg-4 gap-md-3' >
                <div className='position-relative'>
                  <div className='heading-btn'></div>     <div className='position-absolute btn-pink'> <button className='heading-btn-style bold'><span className='mx-1'>   <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <circle cx="6.65204" cy="6.50706" r="6" transform="rotate(-8 6.65204 6.50706)" fill="currentColor" />
                  </svg></span>LET’S START</button></div>
                </div>
                <div>
                  <h1 className='h-1 bold'>AND</h1>
                </div>
              </div>
              <h1 className='h-1 bold'>FREEDOM</h1>
            </div>

            <div className='d-flex gap-xxl-4 gap-xl-4 gap-lg-3 gap-md-2 mt-xxl-5 mt-xl-5 mt-lg-5 mt-md-3'>
              <div className='icon'>
              </div>
              <div className='semiBold gray-para'>Make Plans, save your income more to <br />
                save your life in the future.</div>
            </div>
            <>
              <h1 className='semiBold gray-text'>Increase <br/>
of your wealth</h1>
            </>
          </div>
          <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-6'>
            <div className='row'>
              <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                <div className='bg-ava position-relative'>
                <img src={userImg} width='100%'/>
                <div className='position-absolute border-left'><svg xmlns="http://www.w3.org/2000/svg" width="286" height="186" viewBox="0 0 286 186" fill="none">
  <path d="M286 1H1V185.5" stroke="black" stroke-opacity="0.1" stroke-width="2"/>
</svg></div>
                </div>
              
                <div className='d-flex justify-content-end py-xxl-4 py-xl-5 py-lg-5 py-md-3 me-xxl-4 me-xl-4 me-lg-3 plus-icon'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                </svg></div>
                <div className='box-gray p-4 '>
                  <div className='semiBold f-18'>REVENUE</div>
                  <h1 className='f-64 medium'>32,956</h1>
                  <div className='d-flex justify-content-between align-items-end'>
                    <div><button className='btn-blue medium'>+156%</button></div>
                    <div>
                      <img src={Boxes}/>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
                <div className='bg-white'>
                  <div className='p-xxl-5 p-xl-5 p-lg-5 p-md-4 text-center'>
                    <h2 className='medium card-heading'>Download <br />
                      app now</h2>
                    <img src={Baloon} className='py-xxl-3 py-xl-3 py-lg-3 py-md-0' />
                    <p className='semiBold card-p'>14-day trial</p>
                    <div className='position-absolute apple-icon'>
                      <img src={AppleIcon}  width='100%'/>
                    </div>

                  </div>
                </div>
              <div className='position-absolute border-right'><svg xmlns="http://www.w3.org/2000/svg" width="286" height="186" viewBox="0 0 286 186" fill="none">
                <path d="M285 0.5V185H0" stroke="white" stroke-opacity="0.2" stroke-width="2" />
              </svg></div>
              </div>
            </div>
          </div>
        </div>
        </div>
     
      </div>
   {/* Small Screen  */}
   <div className='smallScreen'>
          <MobileView />
        </div>
    </>
  )
}

export default LightMode
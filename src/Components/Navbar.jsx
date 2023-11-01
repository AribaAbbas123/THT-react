import React from 'react'
import { useEffect } from 'react'
import './Css/LightMode.css'
import { Link } from 'react-router-dom'
import Logo from './Css/Images/Logo.png'
import Line from './Css/Images/navbar-line.png'

const Navbar = () => {
  let Ctheme = localStorage.getItem('theme')

  const toggleDarkMode = () => {
    if (Ctheme === 'dark') {
      document.body.removeAttribute('dark');
      localStorage.setItem("theme", 'light')
    } else {
      document.body.setAttribute('dark', '');
      localStorage.setItem("theme", 'dark')
    }
  };



  useEffect(() => {
    let Ctheme = localStorage.getItem('theme')
    // console.log(Ctheme);

    if (Ctheme && Ctheme === 'dark') {
      document.body.setAttribute('dark', '');
    }


  }, [Ctheme])

  return (
    <>
      <div className='navbar-space-top-bottom'>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid  px-0">
            <Link className="navbar-brand" to="#">
              <div className='d-flex align-items-center'>
                <div className='logo'>
                </div>
                <div className='extraBold logo-text'>TEST APP</div>
              </div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className='mx-xl-3 mx-lg-1'>
                <img src={Line} className='d-lg-block d-sm-none d-none' />
              </div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-xl-3 mx-lg-1">
                  <Link className="nav-link active semiBold" aria-current="page" to="#">SERVICES</Link>
                </li>
                <li className="nav-item mx-xl-3 mx-lg-1">
                  <Link className="nav-link semiBold" aria-current="page" to="#">FEATURES</Link>
                </li>
                <li className="nav-item mx-xl-3 mx-lg-1">
                  <Link className="nav-link semiBold" aria-current="page" to="#">DEMO</Link>
                </li>
                <li className='mx-xl-3 mx-lg-2 mb-lg-0 mb-sm-2 mb-2'>
                  <Link className='medium'> <button type="button" className="navbar-btn-dark" onClick={toggleDarkMode}>{Ctheme && Ctheme === 'dark' ? 'ACTIVATE LIGHT MODE' : 'ACTIVATE DARK MODE'}</button></Link>
                </li>
              </ul>
              <div className="d-flex align-items-center right-navbar mx-lg-0 mx-sm-3 mx-3">
                <Link className='medium'><button type="button" class="navbar-btn-white">LOGIN</button></Link>
                <div className='mx-3'>
                  <Link className='web-svg d-lg-block d-sm-none d-none'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                  </svg></Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
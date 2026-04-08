import React from 'react'
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom'; // add in v-16

//Defautl props *
export default function Navbar({
    title= 'Set title here',
    aboutText= 'About text here',
    mode,
    toggleMode
}) 


{
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    {/*<Link className="navbar-brand" to="/">{title}</Link>*/}
    <a className="navbar-brand" href="#">{title}</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/*<Link className="nav-link active" aria-current="page" to="/">Home</Link>*/}
          <a className="nav-link active" aria-current="page" href="#">Home</a>

        </li>
        {/*<li className="nav-item">
          <Link className="nav-link" to="/about">{aboutText}</Link>
        </li>*/}
      </ul>

    {/*copy from bootstrap */}
      <div className={`form-check form-switch text-${mode ==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick = {toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
          <label className="form-check-label" htmlFor="switchCheckDefault">Enable DarkMode</label>
      </div>

    </div>
  </div>
</nav>
  )
}
//props type *
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
 
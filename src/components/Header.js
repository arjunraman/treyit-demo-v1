import PropTypes from 'prop-types'
import React from 'react'


const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-superpowers"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>TREY IT</h1>
        <p>
        F**K It | Love It | Need It | Try It | Own It | Trey It
        </p>
        <p>
        Find Sweet 2nd Hand Deals You've Always Wanted with Trey. #treyit
        </p>
        <p>
        #treyit
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('build')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('stake')
            }}
          >
            Categories
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Future
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Request
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

/*
  A fully responsive site template designed by{' '}
  <a href="https://html5up.net">HTML5 UP</a> and released
  <br />
  for free under the{' '}
  <a href="https://html5up.net/license">Creative Commons</a> license.
  */

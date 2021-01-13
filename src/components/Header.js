import PropTypes from 'prop-types'
import React from 'react'


const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-superpowers"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>1UPVC</h1>
        <p>
        The extra life to brands and ideas.
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
            Build
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('stake')
            }}
          >
            Stake
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
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

import PropTypes from 'prop-types'
import React from 'react'
import '../assets/scss/main.scss'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="build"
          className={`${this.props.article === 'build' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Build with Us</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          </p>
          <p>
            Our mission is to research, design, launch, and scale brands
            and innovative ideas that make a positive sustainable impact
            on communities and the world.
            </p>
            <p>
            Our Build services are functionally focused and integrate the following disciplines
            to promote successful operations at scale.
            <ul>
              <li>Organizational Design & Modeling</li>
              <li>Product Management</li>
              <li>Solution Architecture</li>
              <li>Supply Chain Management</li>
              <li>Cyber-Security</li>
            </ul>
          </p>
          {close}
        </article>
        </div>
      )
    }
  }

  Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
  }

  export default Main

import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

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
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          </p>
          <p>
            TBD
            </p>
            <p>
            TBD
            <ul>
              <li>TBD</li>
              <li>TBD</li>
              <li>TBD</li>
              <li>TBD</li>
              <li>TBD</li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="stake"
          className={`${this.props.article === 'stake' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">TBD</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            </p>
            <p>
            TBD
            </p>
            <p>
            TBD
            </p>
            <p>
            TBD

            </p>
            <p>
            TBD
            </p>
            <p>
            TBD
            </p>
            <p>
            TBD
            </p>
            <p>
            TBD
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Future</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            TBD
            </p>
            <p>
            Special thanks to <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Request</h2>
          <form method="post" action="#" netlify-honeypot="bot-field" data-netlify="true" name="contact" onSubmit='submit'>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field half">
              <label htmlFor="cat">Item Category</label>
              <input type="text" name="cat" id="cat" />
            </div>
            <div className="field half">
              <label htmlFor="city">Your City (USA only)</label>
              <input type="text" name="city" id="city" />
            </div>
            <div className="field">
              <label htmlFor="description">Item Description</label>
              <textarea name="description" id="description" rows="2"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://angellist.com" className="icon fa-angellist">
                <span className="label">AngelList</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
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

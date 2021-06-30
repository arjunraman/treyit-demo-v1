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
            F**K IT: Want something, but can't afford it (retail)
            </p>
            <p>
            LOVE IT: Everybody loves a good deal within a day
            </p>
            <p>
            NEED IT: Need it badly or quickly, but have limited time to search?
            </p>
            <p>
            TRY IT: Try it with TreyIt - submit a search, and we can find FAST deals for you within the hour
            </p>
            <p>
            OWN IT: We'll send you deals to secure on marketplaces (e.g.,Craigslist) for that day
            </p>
            <p>
            TREY IT: All you need to do is tag it - #treyit
            </p>
            <p>
            Goal: Searching second hand goods is hard, we make it easy.
            <ul>
              <li>Submit it a form</li>
              <li>Trey will search based on your interest in second hand goods</li>
              <li>Receive a simple email or text every 12-24 hour period with timely deals</li>
              <li>Secure your deal with TreyIt - your personal conceirage</li>
              <li>Tag us on Social Media #treyit</li>

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
          <h2 className="major">Deal Categories</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            TRY IT: Try it with TreyIt - submit a search, and we can help with it within 1 hour
            </p>
            <p>
            Categories
            <ul>
              <li>Antiques</li>
              <li>Appliances</li>
              <li>Auto Parts</li>
              <li>Bikes</li>
              <li>Boat Parts</li>
              <li>Books</li>
              <li>Cars</li>
              <li>Computer Parts</li>
              <li>Electronics</li>
              <li>Furniture</li>
              <li>Gardening</li>
              <li>Gym</li>
              <li>Jewelry</li>
              <li>Motorcycles</li>
              <li>Music Instruments</li>
              <li>Photography</li>
              <li>Sports</li>
              <li>Tools</li>
              <li>Toys & Games</li>
              <li>Video Games</li>
              <li>Wildcard</li>
            </ul>
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
              Coming Soon...
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
          <h2 className="major">Search</h2>
          <form method="post" action="#" netlify-honeypot="bot-field" data-netlify="true" name="contact" onSubmit='submit'>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" required />
            </div>
            <div className="field half">
              <label htmlFor="cat">Item or Deal Category <select name="cat" id="cat">
        <option value="wildcard">All Categories</option>
        <option value="antiques">Antiques</option>
        <option value="appliances">Appliances</option>
        <option value="auto parts">Auto Parts</option>
        <option value="bikes">Bikes</option>
        <option value="boatparts">Boat Parts</option>
        <option value="books">Books</option>
        <option value="cars">Cars</option>
        <option value="computerparts">Computer Parts</option>
        <option value="electronics">Electronics</option>
        <option value="furniture">Furniture</option>
        <option value="gardening">Gardening</option>
        <option value="gym">Gym</option>
        <option value="jewelry">Jewelry</option>
        <option value="motorcycles">Motorcyles</option>
        <option value="musicinstruments">Music Instruments</option>
        <option value="photography">Photography</option>
        <option value="sports">Sports</option>
        <option value="tools">Tools</option>
        <option value="toysandgames">Toys & Games</option>
        <option value="videogames">Video Games</option>
       </select><br /></label>
            </div>
            <div className="field half">
            <label htmlFor="city">US City<select name="city" id="city">
      <option value="wildcard">All Cities</option>
      <option value="atlanta">Atlanta</option>
      <option value="austin">Austin</option>
      <option value="baltimore">Baltimore</option>
      <option value="charlotte">Charlotte</option>
      <option value="chicago">Chicago</option>
      <option value="columbus">Columbus</option>
      <option value="dallas">Dallas</option>
      <option value="denver">Denver</option>
      <option value="elpaso">El Paso</option>
      <option value="houston">Houston</option>
      <option value="indianapolis">Indianapolis</option>
      <option value="jacksonville">Jacksonville</option>
      <option value="lasvegas">Las Vegas</option>
      <option value="losangeles">Los Angeles</option>
      <option value="louisville">Louisville</option>
      <option value="memphis">Memphis</option>
      <option value="milwaukee">Milwaukee</option>
      <option value="nashville">Nashville</option>
      <option value="newyork">New York City</option>
      <option value="oklahomacity">Oklahoma City</option>
      <option value="philadelphia">Philadelphia</option>
      <option value="phoenix">Phoenix</option>
      <option value="portland">Portland</option>
      <option value="sanantonio">San Antonio</option>
      <option value="sandiego">San Diego</option>
      <option value="sfbay">San Francisco</option>
      <option value="sanjose">San Jose</option>
      <option value="seattle">Seattle</option>
      <option value="washingtondc">Washington D.C.</option>
     </select><br /></label>
            </div>
            <div className="field">
              <label htmlFor="description">Item Description</label>
              <textarea name="description" id="description" required rows="2"></textarea>
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

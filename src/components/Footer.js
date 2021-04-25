import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy;2021 Cairnz. | <Link to="/terms/">Terms of Use</Link> | <Link to="/privacy/">Privacy Policy</Link></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer

import React from 'react'
import Link from 'gatsby-link'

import logoBlack from '../images/logo.png';
import logoWhite from '../images/logo-white-1.png';
import menuWhite from '../images/menu-white.png';
import menuBlack from '../images/menu-black.png';
import close from '../images/close.png';

class Header extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
      menuOpen: false,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      this.setState({ fixed: true });
    } else {
      this.setState({ fixed: false });
    }
  }

  toggleMenu = () => {
    const newState = !this.state.menuOpen;
    this.setState({ menuOpen: newState });
  }

  closeMenu = () => {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <div  className={this.state.fixed ? 'header fixed' : 'header'}>
        <Link to="/" style={{ height: '100%' }}>
          <div className="logo">
            <img src={(this.state.fixed || this.state.menuOpen) ? logoBlack : logoWhite} alt="Logo" />
          </div>
        </Link>
        <div className='header-nav'>
          <Link className="header-link" activeClassName="header-link-active" to="/about">
            About Us
          </Link>
          <Link className="header-link" activeClassName="header-link-active" to="/">
            Films
          </Link>
          <Link className="header-link" activeClassName="header-link-active" to="/">
            Investor Corner
          </Link>
          <Link className="header-link" activeClassName="header-link-active" to="/">
            Services
          </Link>
        </div>
        <div className="header-nav-mobile">
          <a className="nav-link" onClick={this.toggleMenu}>
            <div id="nav-icon" className={this.state.menuOpen ? "open" : ""}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <div className={this.state.menuOpen ? "menu-backdrop" : "menu-backdrop hidden"} onClick={this.closeMenu}></div>
          <div className={this.state.menuOpen ? "drawer" : "drawer hidden"}>
            {/* <a className="drawer-close" onClick={this.closeMenu}>
              <img src={close} alt="close" />
            </a> */}
            <Link className="header-link-mobile" activeClassName="header-link-active" to="/about">
              About Us
            </Link>
            <Link className="header-link-mobile" activeClassName="header-link-active" to="/">
              Films
            </Link>
            <Link className="header-link-mobile" activeClassName="header-link-active" to="/">
              Investor Corner
            </Link>
            <Link className="header-link-mobile" activeClassName="header-link-active" to="/">
              Services
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header

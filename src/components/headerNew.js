import React from 'react'
import Link from 'gatsby-link'

import logoBlack from '../images/logo.png';
import logoWhite from '../images/logo-white-1.png';

class Header extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
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

  render() {
    return (
      <div  className={this.state.fixed ? 'header fixed' : 'header'}>
        <Link to="/" style={{ height: '100%' }}>
          <div className="logo">
            <img src={this.state.fixed ? logoBlack : logoWhite} alt="Logo" />
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
      </div>
    );
  }
}

export default Header

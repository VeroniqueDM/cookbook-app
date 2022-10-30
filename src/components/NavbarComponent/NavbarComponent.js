import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return (
        <header className="">
  <div className="navbar navbar-default visible-xs">
    <button type="button" className="navbar-toggle collapsed">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
  </div>

  <nav className="sidebar">
    <div className="navbar-collapse" id="navbar-collapse">
      <div className="site-header hidden-xs">
          <Link className="site-brand" to="/" title="">
            <img className="img-responsive site-logo" alt="" src="./assets/images/1276356921.svg"/>
            Social Recipes          </Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor.</p>
      </div>
      <ul className="nav">
        <li><Link to="/" title="">Home</Link></li>
        <li><a href="./about.html" title="">About</a></li>
        <li><a href="./services.html" title="">Services</a></li>
        <li><a href="./contact.html" title="">Contact</a></li>
        <li><a href="./components.html" title="">Components</a></li>

      </ul>

      <nav className="nav-footer">
        <p className="nav-footer-social-buttons">
          <a className="fa-icon" href="https://www.instagram.com/" title="">
            <i className="fa fa-instagram"></i>
          </a>
          <a className="fa-icon" href="https://dribbble.com/" title="">
            <i className="fa fa-dribbble"></i>
          </a>
          <a className="fa-icon" href="https://twitter.com/" title="">
            <i className="fa fa-twitter"></i>
          </a>
        </p>
        <p>© VeronikaDM 2022</p>
      </nav>  
    </div> 
  </nav>
</header>
    );
};
export default NavbarComponent;

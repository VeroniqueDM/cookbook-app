import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthContext } from '../../contexts/AuthContext';

const NavbarComponent = () => {
  const { user } = useAuthContext();

  let guestNavigation = (
     <>
      <li> <Link className="button" to="/login">Login</Link></li>

<li>
<Link to="/register" className="button">Register</Link>

</li></>
  );

  let userNavigation = (
    
         <>
         <li> <Link  to="/my-recipes">My Recipes</Link></li>
<li>
<Link className="button" to="/create">Add Recipe</Link>

</li>
          <li>
          <Link className="button" to="/logout">Logout</Link>
          </li></>
  );
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

            {user.email
                        ? <span>Welcome, <b>{user.email}</b></span>
                        :  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor.</p>
                    }
       
      </div>
      <ul className="nav">
        <li><Link to="/" title="">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>

                    {user.email
                        ? userNavigation
                        : guestNavigation
                    }
        {/* <li><Link to="/login" title="">Login</Link></li>
        <li><Link to="/register" title="">Register</Link></li> */}

        <li><a href="./about.html" title="">About</a></li>
        <li><a href="./contact.html" title="">Contact</a></li>

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

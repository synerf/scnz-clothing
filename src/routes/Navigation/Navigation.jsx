import { Fragment, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase";
import { ReactComponent as ScnzLogo } from "../../assets/crown.svg";
import "./Navigation.scss";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <ScnzLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ?
            (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>)
            : (<Link className="nav-link" to="/auth">SIGN IN</Link>)
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

import { Fragment, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase";
import { ReactComponent as ScnzLogo } from "../../assets/crown.svg";
import "./Navigation.scss";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";


const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

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
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

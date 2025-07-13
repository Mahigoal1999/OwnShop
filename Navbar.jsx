import react from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [menu, setMenu] = react.useState("Shops");
    return (
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                    <p>SHOPPER</p>
                </div>
            <div className="nav-Menu">
                <ul>
                    <li onClick={() => {setMenu("Shops")}}><Link style={{textDecoration: "none"}} to="/">Shops</Link>{menu==="Shops"?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu("Mens")}}><Link style={{textDecoration: "none"}} to="/Men">Men</Link>{menu==="Mens"?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu("Womens")}}><Link style={{textDecoration: "none"}} to="/Women">Women</Link>{menu==="Womens"?<hr/>:<></>}</li>
                    <li onClick={() => {setMenu("Kids")}}><Link style={{textDecoration: "none"}} to="/Kids">Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
                </ul>
                <div className="nav-login-cart">
                     <Link to="/LoginSignup"><button>Login</button></Link>
                     <Link to="/Cart"><img src={cart_icon} alt="" /></Link>
                     <div className="nav-cart-count">0</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

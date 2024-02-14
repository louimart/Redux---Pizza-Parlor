import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/">Order Pizza</Link>
        </li>
        <li>
          <Link to="/customerinfo">Customer Information</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/admin"></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

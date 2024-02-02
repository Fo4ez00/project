import "../styles/HeaderMenu.css";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <header>
      <h1>PIZZA DAY</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <input
        type="search"
        className="search-input_Menu"
        placeholder="Search..."
      />
      {user && <p className="user-info">{user}</p>}
      
    </header>
  );
};

export default Header;

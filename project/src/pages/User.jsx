import "../styles/HeaderMenu.css";

const Header = ({ user }) => {
  return (
    <header>
      <h1>PIZZA DAY</h1>
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

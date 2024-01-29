const Header = ({ user }) => {
  return (
    <header>
      <h1>PIZZA DAY</h1>

      <input type="search" className="search-input" placeholder="Search..." />
      {user && <p> {user}</p>}
    </header>
  );
};

export default Header;

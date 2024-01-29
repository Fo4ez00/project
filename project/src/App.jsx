import  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Menu from './pages/Menu';
import Header from './pages/User';


const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <Router>
       {user && <Header user={user} />}
      <Routes>
        <Route path="/" element={user ? <Menu /> : <LoginPage onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
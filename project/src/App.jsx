import LoginPage from "./pages/LoginPage";


const App = () => {
  const handleLogin = (username) => {
   
    console.log('Handling login for user:', username);
   
  };

  return (
    

      
<LoginPage onLogin={handleLogin} />
   
  );
};

export default App;
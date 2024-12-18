import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <div>{isLoggedIn ? <Dashboard onLogout={setIsLoggedIn}/> : <LoginPage onLogin={setIsLoggedIn} />}</div>;
}

export default App;

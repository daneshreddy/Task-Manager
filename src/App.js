import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || "");

  return (
    <div>
      {user ? (
        <Dashboard user={user} setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
import { useState } from "react";

function Login({ setUser }) {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!name.trim()) return;
    localStorage.setItem("user", name);
    setUser(name);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>

      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
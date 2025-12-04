import { useState } from "react";
import api from "../api/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await api.post("/users/login", { email, password });
    alert("Token: " + res.data.token);
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}


import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, user, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (user) {
    navigate("/");
    // return (
    //   <div className="container">
    //     <h1>{user.email}</h1>
    //     <Button onClick={() => logout()}>Logout</Button>
    //   </div>
    // );
  }
  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-4 align-items-center "
      >
        <div className="d-flex flex-column">
          <TextInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column">
          <TextInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};
export default Login;

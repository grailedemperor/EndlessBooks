import React, { useState } from "react";
import Input from "../components/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login-form">
      <form>
        <Input type="email" onChange={setEmail} value={email} label="Email" />
        <Input
          type="password"
          onChange={setPassword}
          value={password}
          label="Password"
        />
      </form>
    </div>
  );
}

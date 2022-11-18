import { useState } from "react";
import Input from "../components/Input";

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <Input
        type="username"
        onChange={setUserName}
        value={username}
        label="Username"
      />
      <Input type="email" onChange={setEmail} value={email} label="Email" />
      <Input type="password" />
    </form>
  );
}

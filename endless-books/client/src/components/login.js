import { useState } from "react";
import Input from "../components/Input";

export default function Login() {
<<<<<<< Updated upstream:endless-books/client/src/components/login.js
    return <div>Login</div>;
  }
=======
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <Input type="email" onChange={setEmail} value={email} label="Email" />
      <Input
        type="password"
        onChange={setPassword}
        value={password}
        label="Password"
      />
    </form>
  );
}
>>>>>>> Stashed changes:client/src/pages/Login.js

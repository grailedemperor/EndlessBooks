import React, { useState } from "react";
// import Input from "../components/Input";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

export default function Register(props) {
  // const [username, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        userName: formState.userName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="register-form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            placeholder="username"
            name="userName"
            type="userName"
            id="userName"
            onChange={handleChange}
            // value="userName"
          />
        </div>
        <div>
          <input
            placeholder="youremail@enter.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            // value="email"
          />
        </div>
        <div>
          <input
            placeholder="********"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
            // value="password"
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

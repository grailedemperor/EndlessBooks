import React, { useContext, useState } from "react";
import Input from "../components/Input";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../utils/mutations";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { WonderousContex } from "../utils/context";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("email@domain.com");
  const [password, setPassword] = useState("password");
  const { setAuthState } = useContext(WonderousContex);
  const navigate = useNavigate();

  const [loginFn, { loading, error, data }] = useMutation(LOGIN_MUTATION);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    loginFn({
      variables: {
        email,
        password,
      },
    })
      .then(({ data: { login } }) => {
        console.log(login);
        setAuthState(login);
        navigate("/home");
      })
      .catch((err) => console.trace(err));
  };
  return (
    <Container>
      <Row>
        <Col>
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <Stack direction="vertical" gap={4}>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                label="Email"
                required
              />
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                label="Password"
                required
              />

              <div>
                <button type="submit">Login</button>
              </div>
            </Stack>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

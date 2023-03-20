import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";

import { Container, UserForm, UnderlineText } from "./styled";
import { ThreeDots } from "react-loader-spinner";

import logo from "../../assets/imgs/logo.png";
import { LOGIN } from "../../constants/urls";
import { userContext } from "../../contexts/userContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(userContext);
  const navigate = useNavigate();

  // Sends a request to the server to log in the user
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const body = {
      email,
      password,
    };

    const promisse = axios.post(LOGIN, body);
    promisse.then((response) => {
      context.push(response.data);
      setIsLoading(false);
      navigate("/hoje");
    });
    promisse.catch((error) => {
      setIsLoading(false);
      alert(error.response.data.message);
    });
  }

  return (
    <Container>
      <img src={logo} alt="logo" />

      <UserForm onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          required
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
          data-test="email-input"
        />
        <input
          type="password"
          placeholder="senha"
          required
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
          data-test="password-input"
        />
        <button type="submit" disabled={isLoading} data-test="login-btn">
          {isLoading ? (
            <ThreeDots color="#fff" width="50" height="50" />
          ) : (
            "Entrar"
          )}
        </button>
      </UserForm>

      <Link to={"/cadastro"} data-test="signup-link">
        <UnderlineText>Não tem uma conta? Cadastre-se!</UnderlineText>
      </Link>
    </Container>
  );
}

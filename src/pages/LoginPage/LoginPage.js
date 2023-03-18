import { Container, UserForm, UnderlineText } from "./styled";
import logo from "../../assets/imgs/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LOGIN } from "../../constants/urls";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

	const navigate = useNavigate();

	// Sends a request to the server to log in the user	
	function handleSubmit(e) {
		e.preventDefault();
		const body = {
			email,
			password
		};
		
		const promisse = axios.post(LOGIN, body);
		promisse.then((response) => navigate('/habitos'));
		promisse.catch((error) => alert(error.response.data.message));
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
					onChange={(e) => setEmail(e.target.value)}	 
				/>
        <input 
					type="password" 
					placeholder="senha" 
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)} 
				/>
        <button type="submit">Entrar</button>
      </UserForm>

      <Link to={"/cadastro"}>
        <UnderlineText>Não tem uma conta? Cadastre-se!</UnderlineText>
      </Link>
    </Container>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";

import { Container, 
				 UserForm, 
				 UnderlineText 
} from "./styled";

import logo from "../../assets/imgs/logo.png";
import { LOGIN } from "../../constants/urls";
import { userContext } from "../../contexts/userContext"; 

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const context = useContext(userContext);

	const navigate = useNavigate();

	// Sends a request to the server to log in the user	
	function handleSubmit(e) {
		e.preventDefault();
		const body = {
			email,
			password
		};
		
		const promisse = axios.post(LOGIN, body);
		promisse.then((response) => {
			context.push(response.data)
			navigate('/habitos')
		});
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

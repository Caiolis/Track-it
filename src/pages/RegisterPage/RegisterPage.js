import { Container, UserForm, UnderlineText } from "./styled";
import logo from "../../assets/imgs/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SIGN_UP } from "../../constants/urls";
import axios from "axios";

export default function RegisterPage() {
	const navigate = useNavigate();

  // Object that contains the information of the form to be used later on the submition
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

	// Takes the information of the form starte and updates with the new information the user typed
  function handleChange(e) {
		setForm({...form, [e.target.name]: e.target.value });
	}

	// Creates the body object and send the information to the backend in order to create a new user
	function handleSubmit(e) {
		e.preventDefault();
		const body = {...form};

		const promisse = axios.post(SIGN_UP, body);
		promisse.then(response => navigate("/"));
		promisse.catch(error => console.log(error));
	}

  return (
    <Container>
      <img src={logo} alt="logo" />

      <UserForm onSubmit={handleSubmit}>
        <input 
					type="email" 
					placeholder="email"
					name={'email'} 
					required 
					value={form.email} 
					onChange={handleChange}
				/>
        <input
          type="password"
          placeholder="senha"
					name={'password'} 
          required
          value={form.password}
					onChange={handleChange}
        />
        <input 
					type="text" 
					placeholder="nome"
					name={'name'}  
					required 
					value={form.name} 
					onChange={handleChange}
				/>
        <input 
					type="url" 
					placeholder="foto"
					name={'image'}  
					required 
					value={form.image}
					onChange={handleChange} 
				/>
        <button type="submit">Cadastrar</button>
      </UserForm>

      <Link to={"/"}>
        <UnderlineText>Já tem uma conta? Faça login!</UnderlineText>
      </Link>
    </Container>
  );
}

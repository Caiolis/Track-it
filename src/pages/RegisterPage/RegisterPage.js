import { Container, UserForm, UnderlineText } from './styled';
import logo from '../../assets/imgs/logo.png';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    return (
        <Container>
            <img src={logo} alt="logo" />

            <UserForm>
                <input type="email" placeholder="email" required/>
                <input type="password" placeholder="senha" required/>
                <input type="text" placeholder="nome" required/>
                <input type="url" placeholder="foto" required/>
                <button type="submit">Cadastrar</button>
            </UserForm>

            <Link to={'/'}>
                <UnderlineText>Já tem uma conta? Faça login!</UnderlineText>
            </Link>
        </Container> 
    );
}
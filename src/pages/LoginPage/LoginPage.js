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
                <button type="submit">Entrar</button>
            </UserForm>

            <Link to={'/cadastro'}>
                <UnderlineText>Não tem uma conta? Cadastre-se!</UnderlineText>
            </Link>
        </Container>
    );
}
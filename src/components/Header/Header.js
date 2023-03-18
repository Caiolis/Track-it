import { useContext } from "react";
import { userContext } from "../../contexts/userContext";

import { Container, ProfileContainer } from "./styled";

import logo from "../../assets/imgs/alternative_logo.png";

export default function Header() {
  const [context] = useContext(userContext);

  return (
    <Container>
			<div>
      	<img src={logo} alt="logo" />
			</div>

			<ProfileContainer>
      	<img src={context.image} alt="profile picture" />
			</ProfileContainer>
    </Container>
  );
}

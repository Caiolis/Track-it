import { useContext } from "react";
import { userContext } from "../../contexts/userContext";

import { Container, AddButton } from "./styled";
import Header from "../../components/Header/Header";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import BodyTitle from "../../components/BodyTitle/BodyTitle";

import { HiPlusSm } from "react-icons/hi";

export default function HabbitsPage() {
  return (
		<>
			<Header />
			<BodyContainer>
				<Container>
					<PageTitle>Meus hábitos</PageTitle>
					<AddButton><HiPlusSm size='30' color="#FFF"/></AddButton>
				</Container>
				<BodyTitle>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</BodyTitle>
			</BodyContainer>
		</>
	);
}

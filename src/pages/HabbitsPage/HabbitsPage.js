import { useContext, useState } from "react";
import { userContext } from "../../contexts/userContext";

import { Container, AddButton } from "./styled";
import Header from "../../components/Header/Header";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import AddHabbitCard from "../../components/AddHabbitCard/AddHabbitCard";

import { HiPlusSm } from "react-icons/hi";

export default function HabbitsPage() {
  const [showHabbitCard, setShowHabbitCard] = useState(false);

  return (
    <>
      <Header />
      <BodyContainer>
        <Container>
          <PageTitle>Meus hábitos</PageTitle>
          <AddButton onClick={() => setShowHabbitCard(!showHabbitCard)}>
            <HiPlusSm size="30" color="#FFF" />
          </AddButton>
        </Container>

        <AddHabbitCard showHabbitCard={showHabbitCard} setShowHabbitCard={setShowHabbitCard}/>

        <BodyTitle>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </BodyTitle>
      </BodyContainer>
    </>
  );
}

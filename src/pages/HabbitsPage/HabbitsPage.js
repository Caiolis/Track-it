import { useContext, useEffect, useState } from "react";
import { userContext } from "../../contexts/userContext";
import axios from "axios";

import { Container, AddButton, LoadingContainer } from "./styled";
import Header from "../../components/Header/Header";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import AddHabbitCard from "../../components/AddHabbitCard/AddHabbitCard";
import HabbitCard from "../../components/HabbitCard/HabbitCard";
import { Oval } from "react-loader-spinner";

import { HiPlusSm } from "react-icons/hi";
import { GET_HABBITS } from "../../constants/urls";

export default function HabbitsPage() {
  const [showHabbitCard, setShowHabbitCard] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [context] = useContext(userContext);

  // Gets all the data of the user from the server while displays the loading indicator
  function getHabbitsData() {
    setIsLoading(true);
    const token = context.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const promisse = axios.get(GET_HABBITS, config);
    promisse.then((response) => {
      setData([...response.data]);
      setIsLoading(false);
    });
    promisse.catch((error) => {
      setIsLoading(false);
      console.log(error);
    });
  }

  useEffect(() => {
    getHabbitsData();
  }, []);

  return (
    <>
      <Header />
      <BodyContainer>
        {isLoading ? (
          <LoadingContainer>
            <Oval color="#126BA5" secondaryColor="#52B6FF" />
          </LoadingContainer>
        ) : (
          <>
            <Container>
              <PageTitle>Meus hábitos</PageTitle>
              <AddButton onClick={() => setShowHabbitCard(!showHabbitCard)}>
                <HiPlusSm size="30" color="#FFF" />
              </AddButton>
            </Container>

            <AddHabbitCard
              showHabbitCard={showHabbitCard}
              setShowHabbitCard={setShowHabbitCard}
              getHabbitsData={getHabbitsData}
            />

            {data.length == 0 ? (
              <BodyTitle textSize={"18px"}>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!
              </BodyTitle>
            ) : (
              data.map((item) => (
                <HabbitCard
                  key={item.id}
                  habbitName={item.name}
                  habbitDays={item.days}
                  habbitId={item.id}
                  getHabbitsData={getHabbitsData}
                />
              ))
            )}
          </>
        )}
      </BodyContainer>
    </>
  );
}

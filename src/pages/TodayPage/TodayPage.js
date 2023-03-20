import { MarginContainer, Text } from "./styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import TodayHabbitCard from "../../components/TodayHabbitCard/TodayHabbitCard";

import { DAILY_HABBIT } from "../../constants/urls";

import { useEffect, useContext, useState } from "react";
import { userContext } from "../../contexts/userContext";
import axios from "axios";

export default function TodayPage() {
  const [data, setData] = useState([]);

  const [context] = useContext(userContext);

  useEffect(() => {
    const token = context.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const promisse = axios.get(DAILY_HABBIT, config);
    promisse.then((response) => setData([...response.data]));
    promisse.catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <BodyContainer>
        <MarginContainer>
          <PageTitle>Segunda, 17/05</PageTitle>
          <Text>Nenhum hábito concluído ainda</Text>
        </MarginContainer>

        {data.length == 0 ? (
          <BodyTitle textSize={"18px"}>
            Não há nenhum hábito registrado
          </BodyTitle>
        ) : (
          data.map((item) => (
            <TodayHabbitCard
              key={item.id}
              habbitName={item.name}
              habbitStreak={item.currentSequence}
              habbitRecord={item.highestSequence}
            />
          ))
        )}
      </BodyContainer>
      <Footer />
    </>
  );
}

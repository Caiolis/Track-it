import { Container, CheckButtonContainer, Title, GreenTitle } from "./styled";
import BodyTitle from "../BodyTitle/BodyTitle";
import { BsCheckLg } from "react-icons/bs";

import { DONE_HABBIT, UNDONE_HABBIT } from "../../constants/urls";

import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import axios from "axios";

export default function TodayHabbitCard({
  habbitName,
  habbitStreak,
  habbitRecord,
  habbitDone,
  habbitId,
  getAllDailyHabbits,
  setIsLoading,
}) {
  const [context] = useContext(userContext);

  function handleClick() {
    setIsLoading(true);
    const token = context.token;
    const body = {};
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    if (habbitDone == false) {
      const promisse = axios.post(
        DONE_HABBIT + habbitId + "/check",
        body,
        config
      );
      promisse.then((response) => getAllDailyHabbits());
      promisse.catch((error) => console.log(error));
    } else {
      const promisse = axios.post(
        UNDONE_HABBIT + habbitId + "/uncheck",
        body,
        config
      );
      promisse.then((response) => getAllDailyHabbits());
      promisse.catch((error) => console.log(error));
    }
  }

  return (
    <Container>
      <div>
        <BodyTitle textSize={"20px"} textMargin={"0px 0px 7px 0px"}>
          {habbitName}
        </BodyTitle>
        <Title habbitDone={habbitDone}>
          Sequência atual: <span>{habbitStreak} dias</span>
        </Title>
        <Title>
          Seu recorde:{" "}
          {habbitStreak == habbitRecord && habbitStreak > 0 ? (
            <GreenTitle>{habbitRecord} dias</GreenTitle>
          ) : (
            <span>{habbitRecord} dias</span>
          )}
        </Title>
      </div>
      <CheckButtonContainer onClick={handleClick} habbitDone={habbitDone}>
        <BsCheckLg color="#FFF" size={50} />
      </CheckButtonContainer>
    </Container>
  );
}

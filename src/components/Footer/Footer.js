import { Container, MiddleButtonContainer, SubContainer } from "./styled";
import ButtonSecondary from "../../components/ButtonSecondary/ButtonSecondary";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../contexts/userContext";

import { DAILY_HABBIT } from "../../constants/urls";
import axios from "axios";

export default function Footer() {
  const progressContext = useContext(userContext);
  const [context] = useContext(userContext);
  const [footerData, setFooterData] = useState([]);
  const [currentProgress, setCurrentProgress] = useState();

  let countPercent = 0;

  useEffect(() => {
    const token = context.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const promisse = axios.get(DAILY_HABBIT, config);
    promisse.then((response) => {
      setFooterData([...response.data]);
    });
    promisse.catch((error) => {
      console.log(error);
    });

    footerData.forEach((item) => (item.done ? countPercent++ : ""));
    const finalPercet = Math.round((countPercent / footerData.length) * 100);
    const percentObject = { currentPercent: finalPercet };
    setCurrentProgress(finalPercet);

    if (progressContext.length > 1) {
      progressContext[1].currentPercent = finalPercet;
    } else {
      progressContext.push(percentObject);
    }
  }, [footerData]);

  return (
    <Container data-test="menu">
      <SubContainer textAlign={"left"}>
        <Link to={"/habitos"} data-test="habit-link">
          <ButtonSecondary>Hábitos</ButtonSecondary>
        </Link>
      </SubContainer>

      <MiddleButtonContainer>
        <Link to={"/hoje"} data-test="today-link">
          <CircularProgressbar
            value={currentProgress}
            text={"Hoje"}
            background
            backgroundPadding={6}
            styles={buildStyles({
              textSize: "16px",
              backgroundColor: "#52B6FF",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          ></CircularProgressbar>
        </Link>
      </MiddleButtonContainer>

      <SubContainer textAlign={"right"}>
        <Link to={"/historico"} data-test="history-link">
          <ButtonSecondary>Histórico</ButtonSecondary>
        </Link>
      </SubContainer>
    </Container>
  );
}

import { MarginContainer, Text, LoadingContainer } from "./styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import TodayHabbitCard from "../../components/TodayHabbitCard/TodayHabbitCard";
import { Oval } from "react-loader-spinner";

import { DAILY_HABBIT } from "../../constants/urls";
import days from "../../constants/days";

import { useEffect, useContext, useState } from "react";
import { userContext } from "../../contexts/userContext";
import * as dayjs from "dayjs";
import axios from "axios";

export default function TodayPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [context] = useContext(userContext);
  const progressContext = useContext(userContext);
  const [data, setData] = useState([]);

  const currentWeekDay = dayjs().day();
  const monthDay = dayjs();

  function getAllDailyHabbits() {
    const token = context.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const promisse = axios.get(DAILY_HABBIT, config);
    promisse.then((response) => {
      setIsLoading(false);
      setData([...response.data]);
    });
    promisse.catch((error) => {
      setIsLoading(false);
      console.log(error);
    });
  }

  useEffect(() => {
    setIsLoading(true);
    getAllDailyHabbits();
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <LoadingContainer>
          <Oval color="#126BA5" secondaryColor="#52B6FF" />
        </LoadingContainer>
      ) : (
        <BodyContainer>
          <MarginContainer>
            <PageTitle data-test="today">
              {days[currentWeekDay].dayName}, {monthDay.$D}/
              {monthDay.$M < 10 ? "0" + (monthDay.$M + 1) : monthDay.$M + 1}
            </PageTitle>
            <Text data-test="today-counter">
              {progressContext[1] != undefined &&
              progressContext[1].currentPercent > 0 ? (
                <span>
                  {progressContext[1].currentPercent}% dos hábitos concluídos
                </span>
              ) : (
                "Nenhum hábito concluído ainda"
              )}
            </Text>
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
                habbitDone={item.done}
                habbitId={item.id}
                getAllDailyHabbits={getAllDailyHabbits}
                setIsLoading={setIsLoading}
              />
            ))
          )}
        </BodyContainer>
      )}
      <Footer />
    </>
  );
}

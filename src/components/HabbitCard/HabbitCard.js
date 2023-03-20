import {
  Container,
  TitleContainer,
  DaysContainer,
  WeekDaysContainer,
  Text,
} from "./styled";
import BodyTitle from "../BodyTitle/BodyTitle";
import { BsTrash } from "react-icons/bs";

import days from "../../constants/days";
import { DELETE_HABBIT } from "../../constants/urls";

import axios from "axios";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";

export default function HabbitCard({
  habbitName,
  habbitDays,
  habbitId,
  getHabbitsData,
  setIsLoading,
}) {
  const [context] = useContext(userContext);

  function deleteHabbit() {
    const confirmation = window.confirm("Are you sure you want to delete?");

    if (confirmation) {
      setIsLoading(true);
      const token = context.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const promisse = axios.delete(DELETE_HABBIT + habbitId, config);
      promisse.then((response) => {
        getHabbitsData();
      });
      promisse.catch((error) => console.log(error));
    }
  }

  return (
    <Container data-test="habit-container">
      <TitleContainer data-test="habit-name">
        <div>
          <BodyTitle textSize={"20px"}>{habbitName}</BodyTitle>
        </div>

        <div>
          <BsTrash size={17} onClick={deleteHabbit} data-test="habit-delete-btn"/>
        </div>
      </TitleContainer>

      <DaysContainer>
        {days.map((day) => (
          <DaysSquares
            key={day.id}
            dayIdentifier={day.id}
            dayName={day.label}
            clickable={false}
            selectedDays={habbitDays}
          />
        ))}
      </DaysContainer>
    </Container>
  );
}

function DaysSquares({
  dayName,
  selectedDays,
  dayIdentifier,
  clickable,
  isLoading,
}) {
  let selectedDay = false;

  if (selectedDays != undefined) {
    if (selectedDays.includes(dayIdentifier)) {
      console.log(selectedDays.includes(dayIdentifier));
      selectedDay = true;
    }
  }
  return (
    <WeekDaysContainer
      type="button"
      disabled={isLoading}
      clickable={clickable}
      dayIdentifier={dayIdentifier}
      selectedDay={selectedDay}
      data-test="habit-day"
    >
      <Text selectedDay={selectedDay}>{dayName}</Text>
    </WeekDaysContainer>
  );
}

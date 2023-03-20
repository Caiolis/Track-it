import { Container, Text } from "./styled";

import { useState } from "react";

export default function DaysSelection({
  dayName,
  habbitDays,
  setHabbitDays,
  dayID,
  clickable,
  isLoading,
  selectedDays
}) {
  const [isSelected, setIsSelected] = useState(false);

  // Add the clicked day to the habbitDays array and changes the style
  function handleClick() {
    if (habbitDays.includes(dayID)) {
      habbitDays.splice(dayID, 1);
      setIsSelected(!isSelected);
    } else {
      setHabbitDays([...habbitDays, dayID]);
      setIsSelected(!isSelected);
    }
  }


  console.log(selectedDays)
  // console.log(dayID)
  return (
    <Container
      type="button"
      disabled={isLoading}
      onClick={
        clickable
          ? handleClick
          : () => {
              return;
            }
      }
      isSelected={isSelected}
      clickable={clickable}
      habbitDays={habbitDays}
      dayID={dayID}
    >
      <Text isSelected={isSelected}>{dayName}</Text>
    </Container>
  );
}

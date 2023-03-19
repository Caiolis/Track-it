import { Container, Text } from "./styled";

import { useState } from "react";

export default function DaysSelection({
  dayName,
  habbitDays,
  setHabbitDays,
  dayID,
  clickable
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

  return (
    <Container onClick={clickable ? handleClick : () => {return }} isSelected={isSelected} clickable={clickable}>
      <Text isSelected={isSelected}>{dayName}</Text>
    </Container>
  );
}

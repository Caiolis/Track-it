import {
  Container,
  AddHabbitForm,
  DaysContainer,
  ButtonContainer,
  ButtonSubmit
} from "./styled";
import DaysSelection from "../DaysSelection/DaysSelection";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import { ThreeDots } from "react-loader-spinner";

import days from "../../constants/days";
import { CREATE_HABBIT } from "../../constants/urls";

import { useState, useContext } from "react";
import { userContext } from "../../contexts/userContext"
import axios from "axios";

export default function AddHabbitCard({ showHabbitCard, setShowHabbitCard }) {
	const [habbitName, setHabbitName] = useState('');
  const [habbitDays, setHabbitDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [context] = useContext(userContext);
  
  // Sends the habbit card to the server and cleans the inputs
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const token = context.token;
    const body = {
      name: habbitName,
      days: habbitDays,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const promisse = axios.post(CREATE_HABBIT, body, config);
    promisse.then(response => {
      setIsLoading(false);
      setHabbitName('');
      setHabbitDays([]);
      console.log(response.data);
    });

    promisse.catch(error => {
      setIsLoading(false);
      alert(error.response.data.message);
    })
  }

  return (
    <Container showHabbitCard={showHabbitCard}>
      <div>
        <AddHabbitForm onSubmit={handleSubmit}>
          <input type="text" placeholder="nome do hábito" value={habbitName} onChange={(e) => setHabbitName(e.target.value)}/>

          <DaysContainer>
            {days.map((day) => (
              <DaysSelection dayName={day.label} key={day.id} dayID={day.id} habbitDays={habbitDays} setHabbitDays={setHabbitDays}/>
            ))}
          </DaysContainer>

          <ButtonContainer>
            <ButtonSecondary
              showHabbitCard={showHabbitCard}
              setShowHabbitCard={setShowHabbitCard}
            >
              Cancelar
            </ButtonSecondary>
            <ButtonSubmit disabled={isLoading} type="submit">{isLoading ?
            <ThreeDots 
              color="#fff" 
              width="50" 
              height="50" 
            />
            : 
            "Salvar"
          }</ButtonSubmit>
          </ButtonContainer>
        </AddHabbitForm>
      </div>
    </Container>
  );
}

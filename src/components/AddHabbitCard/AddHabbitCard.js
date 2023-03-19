import {
  Container,
  AddHabbitForm,
  DaysContainer,
  ButtonContainer,
} from "./styled";
import DaysSelection from "../DaysSelection/DaysSelection";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";

import days from "../../constants/days";

export default function AddHabbitCard({ showHabbitCard, setShowHabbitCard }) {
  return (
    <Container showHabbitCard={showHabbitCard}>
			<div>
				<AddHabbitForm>
					<input type="text" placeholder="nome do hábito" />

					<DaysContainer>
						{days.map((day) => (
							<DaysSelection dayName={day.label} key={day.id} />
						))}
					</DaysContainer>

					<ButtonContainer>
						<ButtonSecondary showHabbitCard={showHabbitCard} setShowHabbitCard={setShowHabbitCard}>Cancelar</ButtonSecondary>
						<ButtonPrimary>Salvar</ButtonPrimary>
					</ButtonContainer>
				</AddHabbitForm>
			</div>
    </Container>
  );
}

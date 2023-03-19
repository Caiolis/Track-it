import { Container, TitleContainer, DaysContainer } from './styled';
import BodyTitle from '../BodyTitle/BodyTitle';
import DaysSelection from '../DaysSelection/DaysSelection';
import { BsTrash } from 'react-icons/bs';

import days from '../../constants/days';
import { DELETE_HABBIT } from '../../constants/urls';

import axios from 'axios';
import { useContext } from 'react';
import { userContext } from '../../contexts/userContext';

export default function HabbitCard({ habbitName, habbitDays, habbitId, getHabbitsData }) {
	const [context] = useContext(userContext);

	function deleteHabbit() {
		const token = context.token;
		const config = {
			headers: { Authorization: `Bearer ${token}`}
		};

		const promisse = axios.delete(DELETE_HABBIT + habbitId, config);
		promisse.then(response => {getHabbitsData()});
		promisse.catch(error => console.log(error));
	}

  return (
		<Container>
			<TitleContainer>
				<div>
					<BodyTitle textSize={'20px'}>{habbitName}</BodyTitle>
				</div>

				<div>
					<BsTrash size={17} onClick={deleteHabbit}/>
				</div>
			</TitleContainer>
			
			<DaysContainer>
				{days.map(day => <DaysSelection key={day.id} dayName={day.label} clickable={false}/>)}
			</DaysContainer>
		</Container>
	);
}
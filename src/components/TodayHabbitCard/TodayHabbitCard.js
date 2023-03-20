import { Container, CheckButtonContainer } from './styled';
import BodyTitle from '../BodyTitle/BodyTitle';
import { BsCheckLg } from 'react-icons/bs'

export default function TodayHabbitCard({ habbitName, habbitStreak, habbitRecord }) {
  return (
		<Container>
			<div>
				<BodyTitle textSize={'20px'} textMargin={'0px 0px 7px 0px'}>{habbitName}</BodyTitle>
				<BodyTitle textSize={'13px'}>Sequência atual: {habbitStreak} dias</BodyTitle>
				<BodyTitle textSize={'13px'}>Seu recorde: {habbitRecord} dias</BodyTitle>
			</div>
			<CheckButtonContainer>
				<BsCheckLg color='#FFF' size={50}/>
			</CheckButtonContainer>
		</Container>
	);
}
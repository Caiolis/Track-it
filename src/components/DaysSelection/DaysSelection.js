import { Container, Text } from './styled';

export default function DaysSelection({ dayName }) {
	return (
		<Container>
			<Text>{dayName}</Text>
		</Container>
	);
}
import { Button } from './styled';

export default function ButtonSecondary({ children, setShowHabbitCard, showHabbitCard }) {
	return (
		<Button type='button' onClick={() => setShowHabbitCard(!showHabbitCard)}>{children}</Button>
	);
}
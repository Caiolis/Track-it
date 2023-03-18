import {  } from './styled';
import { useContext } from 'react';
import { userContext } from '../../contexts/userContext';

export default function HabbitsPage() {
	const [context] = useContext(userContext);

	console.log(context);

	return (
		<h1>Olá mundo</h1>
	);
}
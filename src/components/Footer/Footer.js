import { Container } from './styled';
import ButtonSecondary from '../../components/ButtonSecondary/ButtonSecondary';

import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<Container>
			<div>
				<Link to={'/habitos'}>
					<ButtonSecondary>
						Hábitos
					</ButtonSecondary>
				</Link>
			</div>

			<div>
				<Link to={'/hoje'}>
					<ButtonSecondary>
						Hoje
					</ButtonSecondary>
				</Link>
			</div>

			<div>
				<Link to={'/historico'}>
					<ButtonSecondary>
						Histórico
					</ButtonSecondary>
				</Link>
			</div>
		</Container>
	);
}
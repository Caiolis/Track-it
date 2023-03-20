import { MarginContainer } from './styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BodyContainer from '../../components/BodyContainer/BodyContainer';
import PageTitle from '../../components/PageTitle/PageTitle';
import BodyTitle from '../../components/BodyTitle/BodyTitle';

export default function HistoricPage() {
	return (
		<>	
			<Header />
			<BodyContainer>
				<MarginContainer>
					<PageTitle>Histórico</PageTitle>
					<BodyTitle textSize={'18px'} textMargin={'17px 0px 0px 0px'}>Em breve você poderá ver o histórico dos seus hábitos aqui!</BodyTitle>
				</MarginContainer>
			</BodyContainer>
			<Footer />
		</>
	);
}
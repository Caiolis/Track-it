import styled from "styled-components";

export const Container = styled.div`
	width: ${props => (props.showHabbitCard ? "100%" : "0px")};
	height: ${props => (props.showHabbitCard ? "198px" : "0px")};
	padding: ${props => (props.showHabbitCard ? "18px" : "0px")};
	margin-bottom: ${props => (props.showHabbitCard ? "30px" : "0px")};
	background-color: #FFF;
	border-radius: 5px;
	transition: all ease-in-out 0.3s;
	div {
		display: ${props => (props.showHabbitCard ? '' : "none")};
	}
`;

export const AddHabbitForm = styled.form`
	width: 100%;

	input {
		width: 100%;
		outline: none;
		border: 1px solid #D4D4D4;
		border-radius: 5px;
		font-family: Lexend Deca;
		font-size: 20px;
		font-weight: 400;
		padding: 10px 13px;
		margin-bottom: 10px;
		&::placeholder {
			color: #DBDBDB;
		}
	}
`;

export const DaysContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 4px;
`;

export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: end;
	gap: 20px;
	margin-top: 30px;
`;
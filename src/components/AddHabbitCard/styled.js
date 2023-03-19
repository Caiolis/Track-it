import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	background-color: #FFF;
	padding: 18px;
	border-radius: 5px;
	margin-bottom: 30px;
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
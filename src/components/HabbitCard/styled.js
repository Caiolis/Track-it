import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	padding: 18px;
	margin-bottom: 10px;
	background-color: #FFF;
	border-radius: 5px;
	transition: all ease-in-out 0.3s;
`;

export const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	div {
		display: flex;
		align-items: center;
	}
`;

export const DaysContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 4px;
	margin-top: 10px;
`;

export const WeekDaysContainer = styled.button`
	width: 30px;
	height: 30px;
	border: 1px solid ${props => props.isSelected ? '#CFCFCF' : '#D4D4D4'};
	text-align: center;
	background-color: ${props => props.selectedDay ? '#CFCFCF' : '#FFF'};
	border-radius: 5px;
	transition: all ease-in-out 0.3s;
`;

export const Text = styled.h1`
	font-family: Lexend Deca;
	font-size: 20px;
	font-weight: 400;
	color: ${props => props.selectedDay ? '#FFF' : '#DBDBDB'};
	transition: all ease-in-out 0.3s;
`;
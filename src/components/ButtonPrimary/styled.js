import styled from "styled-components";

export const Button = styled.button`
	outline: none;
	border: none;
	border-radius: 5px;
	background-color: #52B6FF;
	color: #FFF;
	font-family: Lexend Deca;
	font-size: 16px;
	font-weight: 400;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 84px;
	height: 45px;
	&:hover {
		background-color: #287bb8;
	}
	&:disabled {
		opacity: 0.7;
		background-color: #52B6FF;
	}
`;
import styled from "styled-components";

export const Container = styled.div`
	width: 30px;
	height: 30px;
	border: 1px solid ${props => props.isSelected ? '#CFCFCF' : '#D4D4D4'};
	text-align: center;
	background-color: ${props => props.isSelected ? '#CFCFCF' : '#FFF'};
	border-radius: 5px;
	transition: all ease-in-out 0.3s;
`;

export const Text = styled.h1`
	font-family: Lexend Deca;
	font-size: 20px;
	font-weight: 400;
	color: ${props => props.isSelected ? '#FFF' : '#DBDBDB'};
	transition: all ease-in-out 0.3s;
`;
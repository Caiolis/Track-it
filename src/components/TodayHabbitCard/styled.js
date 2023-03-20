import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	padding: 18px;
	margin-bottom: 10px;
	background-color: #FFF;
	border-radius: 5px;
	transition: all ease-in-out 0.3s;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const CheckButtonContainer = styled.button`
	outline: none;
	padding: 5px;
	background-color: ${props => props.habbitDone ? '#8FC549' : '#EBEBEB'};
	border: 1px solid #E7E7E7;
	border-radius: 5px;
`;

export const Title = styled.h3`
	font-family: Lexend Deca;
	font-size: 13px;
	font-weight: 400;
	color: #666666;
	span {
		color: ${props => props.habbitDone ? '#8FC549' : '#666'};
	}
`; 

export const GreenTitle = styled.span`
	color: #8fc549 !important;
`;
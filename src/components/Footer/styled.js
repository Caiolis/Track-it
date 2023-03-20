import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	background-color: #FFF;
	padding: 22px 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
`;

export const SubContainer = styled.div`
	width: 100%;
	text-align: ${props => props.textAlign};
`;

export const MiddleButtonContainer = styled.div`
	min-width: 85px;
	min-height: 85px;
	margin-top: -50px;
	margin-bottom: -15px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
`;
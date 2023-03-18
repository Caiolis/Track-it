import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const UserForm = styled.form`
	width: 100%;
	padding: 0px 36px;
	margin: 35px 0px 25px 0px;
	input {
		width: 100%;
		height: 45px;
		padding: 0px 11px;
		outline: none;
		border: 1px solid #D4D4D4;
		border-radius: 5px;
		margin: 6px 0px;
		font-family: Lexend Deca;
		font-size: 20px;
		font-weight: 400;
		&::placeholder {
			color: #DBDBDB;
		}
	}
	button {
		outline: none;
		border: none;
		border-radius: 5px;
		background-color: #52B6FF;
		color: #FFF;
		font-family: Lexend Deca;
		font-size: 21px;
		font-weight: 400;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 45px;
		&:hover {
			background-color: #287bb8;
		}
		&:disabled {
			opacity: 0.7;
			background-color: #52B6FF;
		}
	}
`;

export const UnderlineText = styled.span`
	font-family: Lexend Deca;
	font-size: 14px;
	font-weight: 400;
	text-align: center;
	color: #52B6FF;
	text-decoration: underline;
`;
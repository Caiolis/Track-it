import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	background-color: #126BA5;
	padding: 10px 18px;
	box-shadow: 0px 4px 4px 0px #00000026;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	div {
		width: 100%;
	}
`;

export const ProfileContainer = styled.div`
	width: 100%;
	text-align: right;
	img {
		width: 51px;
		height: 51px;
		border-radius: 50%;
		object-fit: cover;
	}
`;
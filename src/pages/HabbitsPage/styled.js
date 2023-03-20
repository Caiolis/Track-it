import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 30px;
`;

export const AddButton = styled.button`
  width: 40px;
  height: 35px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #52b6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #287bb8;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 115px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

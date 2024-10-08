import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  background-color: skyblue;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledInput = styled.input`
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 15px;
  font-size: 20px;
  z-index: 10;
  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: tomato;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 20px;
  margin-top: 20px;
`;

export const CounterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

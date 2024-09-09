import { StyledInput } from "./styles";

function handleInput(e) {
  e.preventDefault();
  e.stopPropagation();
}

function Input() {
  return (
    <>
      <h3> 입력</h3>
      <StyledInput onClick={handleInput}/>
    </>
  );
}

export default Input;

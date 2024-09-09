import { StyledInput } from "./styles";

function Input() {
  

  return (
    <>
      <h3> 입력</h3>
      <StyledInput onClick={(e)=> {e.stopPropagation();     e.preventDefault();}}/>
    </>
  );
}

export default Input;

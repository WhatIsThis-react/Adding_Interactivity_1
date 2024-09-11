import { StyledInput } from "./styles";
// 전파 방지
function Input() {
  return (
    <>
      <h3> 입력</h3>
      <StyledInput onClick={(e)=>{e.stopPropagation();}}/>
    </>
  );
}

export default Input;

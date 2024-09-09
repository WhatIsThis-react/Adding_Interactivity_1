import { StyledButton } from "./styles";

function Button() {
  const onSubmitBtn = (e) => {
    e.stopPropagation(); 
    e.preventDefault(); 
    alert("제출 버튼 클릭")
  }

  return <StyledButton onClick={onSubmitBtn}>제출</StyledButton>;
}

export default Button;

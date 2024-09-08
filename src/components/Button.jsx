import { StyledButton } from "./styles";

function Button() {
  return <StyledButton onClick={alert("제출 버튼 클릭")}>제출</StyledButton>;
}

export default Button;

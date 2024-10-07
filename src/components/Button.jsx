import { StyledButton } from "./styles";

function Button() {
  function handleButton(e){
    e.stopPropagation();
    alert("제출 버튼 클릭");
  }

  return <StyledButton onClick={handleButton}>제출</StyledButton>;
}

export default Button;
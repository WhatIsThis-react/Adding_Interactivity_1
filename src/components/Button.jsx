import { StyledButton } from "./styles";

function Button() {
  function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    alert("제출 버튼 클릭");
  }

  return <StyledButton onClick={handleClick}>제출</StyledButton>;
}

export default Button;

import { useState } from "react";
import { StyledButton, CounterWrapper, ButtonWrapper } from "./styles";

function Counter() {
  const [isSent, setIsSent] = useState(false);
  const [count, setCount] = useState(0);

  if (isSent) {
    return <div> 전송되었습니다.</div>;
  } else {
    return (
      <CounterWrapper>
        {count}
        <ButtonWrapper>
          <StyledButton onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setCount(count + 1);
          }}>
            더하기
          </StyledButton>
          <StyledButton onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsSent(true);
          }}>Send</StyledButton>
        </ButtonWrapper>
      </CounterWrapper>
    );
  }
}

export default Counter;

import { useState } from "react";
import { StyledButton, ConterWrapper } from "./styles";

function Counter() {
  const [isSent, setIsSent] = useState(false);

  if (isSent) {
    return <div> 전송되었습니다.</div>;
  } else {
    const [count, setCount] = useState(0);
    return (
      <ConterWrapper>
        {count}
        <ButtonWrapper>
          <StyledButton onClick={() => setCount(count + 1)}>
            더하기
          </StyledButton>
          <StyledButton onClick={() => setIsSent(true)}>Send</StyledButton>
        </ButtonWrapper>
      </ConterWrapper>
    );
  }
}

export default Counter;

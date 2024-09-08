import { StyledWrapper } from "./styles";
function Wrapper({ children }) {
  const clickFunc = () => {
    alert("배경 클릭");
  };
  return (
    <StyledWrapper onClick={clickFunc()}>
      <h2>배경을 클릭할 수 있어요</h2>
      {children}
    </StyledWrapper>
  );
}

export default Wrapper;

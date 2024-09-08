import { StyledWrapper } from "./styles";
function Wrapper() {
  const clickFunc = () => {
    alert("배경 클릭");
  };
  return (
    <StyledWrapper onClick={clickFunc()}>배경을 클릭할 수 있어요</StyledWrapper>
  );
}

export default Wrapper;

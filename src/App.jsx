import Button from "./components/Button";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Wrapper>
      <Input />
      <Button />
      <h3>카운터</h3>
      <Counter />
    </Wrapper>
  );
}

export default App;

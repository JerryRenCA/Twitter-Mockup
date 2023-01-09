import Home from "./pages/Home";
import tw from "tailwind-styled-components";

const Container = tw.div`bg-black text-primary-white w-screen flex justify-center min-h-screen`;
const Wrapper = tw.div` `;
function App() {
  return (
    <Container className="bg-black">
      <Wrapper>
        <Home />
      </Wrapper>
    </Container>
  );
}

export default App;

import { Fade, Slide } from "react-awesome-reveal";

function App() {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <Fade cascade>
        <h2>Features</h2>
        <p>Feature 1</p>
        <p>Feature 2</p>
        <p>Feature 3</p>
      </Fade>
    </div>
  );
}

export default App;

import { ColorsProvider } from "./colors";
import { Routes } from "./routes";
import { Template } from "./template";

function App() {
  return (
    <ColorsProvider>
      <Template>
        <Routes />
      </Template>
    </ColorsProvider>
  );
}

export default App;

import { ModalProvider } from "./Application/Global/Modal/Modal.Context";
import Routes from "./Presentation/Routes";

function App() {
  return (
    <ModalProvider>
      <Routes />
    </ModalProvider>
  );
}

export default App;

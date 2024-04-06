import { BrowserRouter } from "react-router-dom";
import AnimateRoutes from "./routes/AnimateRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AnimateRoutes />
    </BrowserRouter>
  );
};

export default App;

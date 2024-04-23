import "./styles/globals.scss";
import "swiper/swiper-bundle.css";

import { Router } from "./routes";
import { MobileProvider } from "./MobileContext";

function App() {
  return (
    <MobileProvider>
      <Router />
    </MobileProvider>
  );
}

export default App;

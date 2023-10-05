import logo from "./logo.svg";
import "./App.css";
import { VStack } from "@chakra-ui/react";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <VStack bg="blackAlpha.800">
      <Header />
      <Main />
      <Services />
      <Portfolio />
    </VStack>
  );
}

export default App;

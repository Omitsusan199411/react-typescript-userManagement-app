import { ChakraProvider } from "@chakra-ui/react";
import { VFC } from "react";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./theme/theme";
import { Router } from "./router/Router";

export const App: VFC = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
};

import { createRoot } from "react-dom/client";

import { ConfigRoot } from "./ConfigRoot";
import React, { StrictMode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

(() => {
  "use strict";
  const container = document.getElementById("root");
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = createRoot(container!);
  root.render(
    <StrictMode>
      <ChakraProvider>
        <ConfigRoot />
      </ChakraProvider>
    </StrictMode>,
  );
})();

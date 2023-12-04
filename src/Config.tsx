import { createRoot } from "react-dom/client";

import { ConfigComponent } from "./ConfigComponent";
import React, { StrictMode } from "react";

(() => {
  "use strict";
  const container = document.getElementById("root");
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = createRoot(container!);
  root.render(
    <StrictMode>
      <ConfigComponent />
    </StrictMode>,
  );
})();

import React from "react";
import Pages from "./pages";

const Routers = {
  "/": () => <Pages.StronaGlowna />,
  "/aktualnosci": () => <Pages.Aktualnosci />,
  "/kontakt": () => <Pages.Kontakt />,
  "/newsletter": () => <Pages.Newsletter />
};

export default Routers;

import Header from "./components/Header/Header.jsx";
import CoreComponents from "./components/CoreComponents.jsx";
import Examples from "./components/Examples.jsx";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreComponents />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;

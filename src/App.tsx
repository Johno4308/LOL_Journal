import { Fragment } from "react";
import { useChampion } from "./ChampionsData/Champion";

function App() {
  const { champion } = useChampion();

  return (
    <Fragment>
      <Header />
    </Fragment>
  );
}

export default App;

import { useChampion } from "./ChampionsData/Champion";

function App() {
  const { champion } = useChampion();
  return <div>{JSON.stringify(champion)}</div>;
}

export default App;

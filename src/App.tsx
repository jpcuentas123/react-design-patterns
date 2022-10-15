import ASide from "./components/ASide";
import SplitScreen from "./components/Layouts/SplitScreen";
import ListOfPersonAndProducts from "./components/ListOfPersonAndProducts";

function App() {
  return (
    <main className="App">
      <ASide />
      <hr />
      <ListOfPersonAndProducts />
    </main>
  );
}

export default App;

import ErrorBoundary from "./ErrorBoundary";
import NestedObject from "./components/data/NestedObject.json";
import RecursiveComponent from "./components/FunctionalProgramming/RecursiveComponents/RecursiveComponent";

function App() {
  return (
    <ErrorBoundary>
      <main className="App">
        <RecursiveComponent data={NestedObject} />
      </main>
    </ErrorBoundary>
  );
}

export default App;

import ASide from "./components/ASide";
import Modal from "./components/Layouts/Modal";
import ListOfPersonAndProducts from "./components/ListOfPersonAndProducts";
import UserProfile from "./components/User";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <main className="App">
        <UserProfile />
      </main>
    </ErrorBoundary>
  );
}

export default App;

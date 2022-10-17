import ASide from "./components/ASide";
import Modal from "./components/Layouts/Modal";
import ListOfPersonAndProducts from "./components/ListOfPersonAndProducts";

function App() {
  return (
    <main className="App">
      <ASide />
      <hr />
      <ListOfPersonAndProducts />
      <hr />
      <Modal title="Modal">
        <h1>Modal</h1>
      </Modal>
    </main>
  );
}

export default App;

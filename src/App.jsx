import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";
import "./App.css";

function App() {
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "24px" }}>
      <Header />
      <ListaTareas />
    </div>
  );
}

export default App;
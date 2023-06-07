import "./App.css";
import Component from "./Component";
import List from "./List";

function App() {
  return (
    <div className="App">
      <Component />
      <List users={[]} />{" "}
    </div>
  );
}

export default App;

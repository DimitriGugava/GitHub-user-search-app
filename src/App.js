import "./App.css";
import MainComponent from "./MainComponent/MainComponent";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      {data.user.map((info) => (
        <MainComponent info={info} />
      ))}
    </div>
  );
}

export default App;

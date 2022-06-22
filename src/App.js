import logo from "./logo.svg";
import "./App.css";
import Tabs from "./Components/Tabs";
import Tabswitharrows from "./Components/Tabswitharrows";
import DatePikerComponent from "./Components/DatePikerComponent";

function App() {
  return (
    <>
      <div style={{ "margin-left": "100px", "margin-right": "100px" }}>
        <Tabs />
        <hr />
        <DatePikerComponent />
      </div>
    </>
  );
}

export default App;

import Chat from "./Components/Chat";
import "./App.css";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="main">
      <div className="contentWrapper">
        <Welcome />
        <Chat />
      </div>
    </div>
  );
}

export default App;

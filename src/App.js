import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import AssignmentMarks from "./components/AssignmentMarks/AssignmentMarks";
import PhoneBar from "./components/AssignmentMarks/PhoneBar/PhoneBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="font-bold text-4xl underline text-green-600 mb-8">
        this is big big text header
      </h1>
      <p>this is simple paregraph</p>
      <Pricing></Pricing>
      <AssignmentMarks />
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;

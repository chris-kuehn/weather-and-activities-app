import "./App.css";
import Form from "./components/Form/index.js";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [name, setName] = useState([]);
  // const [isForGoodWeather, setIsForGoodWeather] = useState(true);

  function handleAddActivity(newActivity) {
    setName([...name, { id: uid(), ...newActivity }]);
  }
  console.log(name);
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <ul>
        {name.map((oneActivity) => {
          return (
            <li key={oneActivity.id}>
              {oneActivity.activityName}
              {oneActivity.isForGoodWeather}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;

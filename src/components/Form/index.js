import { useState } from "react";

export default function Form({ onAddActivity }) {
  // const [name, setName] = useState("");
  // const [isForGoodWeather, setIsForGoodWeather] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();

    // console.log(event.target.name.value);
    // console.log(event.target.checkbox.checked);

    const newActivity = {
      activityName: event.target.name.value,
      isForGoodWeather: event.target.checkbox.checked,
    };
    onAddActivity(newActivity);
    // console.log(newActivity);
    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new activity:</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="checkbox">Good werather activity:</label>
      <input type="checkbox" name="checkbox" id="checkbox" />
      <button type="submit">Submit</button>
    </form>
  );
}

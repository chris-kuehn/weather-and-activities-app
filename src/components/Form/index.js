export default function Form({ onAddActivity }) {
  return (
    <form>
      <h2>Add new activity:</h2>
      <label for="name">Name:</label>
      <input type="text" name="name"></input>
      <label for="checkbox">Good werather activity:</label>
      <input type="checkbox" name="checkbox"></input>
      <button>Submit</button>
    </form>
  );
}

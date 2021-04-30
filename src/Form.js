import List from "./List";

function Form({ handleSubmit, name, setName }) {
  return (
    <div className="form-container">
      <h2>What's next?</h2>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="form-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

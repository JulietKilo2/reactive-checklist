function Form({ handleSubmit, name, list, setName }) {
  return (
    <div className="form-container">
      {list.length > 0 ? <h2>What's next?</h2> : <h2>Let's get started!</h2>}
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

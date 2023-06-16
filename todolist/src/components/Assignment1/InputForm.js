import React, { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!text) {
      setError("Please enter a string");
      return;
    }

    if (count <= 0) {
      setError("Please enter a valid number");
      return;
    }
    setResult(text.repeat(count));
  };

  return (
    <div className="Wrapper">
      <h1>React String Repeater</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="string">String</label>
          <input
            type="text"
            class="form-control"
            id="string"
            aria-describedby="emailHelp"
            placeholder="Enter String"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="number">Number</label>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter number"
          />
        </div>
        <button type="submit" class="btn btn-primary mb-4">
          Submit
        </button>
        {error && (
          <small id="emailHelp" class="form-text text-danger">
            {error}
          </small>
        )}
        {result && (
          <div class="alert alert-danger" role="alert">
            {result}
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;

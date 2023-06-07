import React, { useState } from "react";
import "./App.css";
const Component = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      alert("Enter all fields");
      return;
    }
    if (+age < 1) {
      alert("age can't be negative");
      return;
    }

    console.log(name, age);
    setName("");
    setAge("");
  };

  const addNameHandler = (e) => {
    setName(e.target.value);
  };
  const addAgeHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <form className="form" onSubmit={addUserHandler}>
        <div>
          <label>Enter Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={addNameHandler}
          />
        </div>
        <div>
          <label>Enter Age</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={addAgeHandler}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default Component;

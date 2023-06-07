import React from "react";

const List = (props) => {
  return (
    <div style={{ border: "2px solid black" }}>
      <ul>
        {props.users.map((user) => {
          <li>
            {user.name} ({user.age} years old)
          </li>;
        })}
      </ul>
    </div>
  );
};

export default List;

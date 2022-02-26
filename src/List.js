import { useState } from "react";
import ListItem from "./ListItem";
import "./list.css";

const List = () => {
  const [text, setText] = useState("");
  const [List, setList] = useState(["123", "345", "mhs", "mab", "sef"]);

  const renderList = () => {
    return (
      <ListItem>
        {List.map((content, index) => (
          <li
            key={`list-1-${index}`}
            style={{
              backgroundColor:
                index % 3 == 0 ? "red" : index % 3 == 1 ? "green" : "blue",
            }}
          >
            {content}
          </li>
        ))}
      </ListItem>
    );
  };
  const addtodo = (event) => {
    console.log(event);
    const x = [...List];
    x.push(text);
    setList(x);
    setText("");
  };
  return (
    <div className="List">
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={addtodo}>Add</button>
      <ul>{renderList()}</ul>
    </div>
  );
};
export default List;

import { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";
import Counter from "./Counter";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([
    { id: 0, name: "Hello todolist, my old friend", status: false },
    { id: 1, name: "I've come to build you again", status: true },
  ]);
  const [count, setCount] = useState(0);

  const handleCount = () => {
    let localCount = 0;
    list.forEach((item) => {
      if (item.status === true) {
        localCount++;
      }
    });
    setCount(localCount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setList([
        ...list,
        { id: new Date().getTime().toString(), name: name, status: false },
      ]);
      setName("");
    }
    return;
  };

  const handleStatus = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        const replacedItem = { ...item };
        replacedItem.status = !replacedItem.status;
        return replacedItem;
      }
      return item;
    });
    setList(newList);
  };

  const deleteItem = (id) => {
    const newList = list.filter((item) => {
      return item.id !== id;
    });
    setList(newList);
  };

  useEffect(() => {
    handleCount();
  }, [list]);

  return (
    <div className="app-container">
      <Form name={name} setName={setName} handleSubmit={handleSubmit} />
      <Counter count={count} list={list} />
      <List
        list={list}
        handleStatus={handleStatus}
        deleteItem={deleteItem}
        handleCount={handleCount}
      />
    </div>
  );
}

export default App;

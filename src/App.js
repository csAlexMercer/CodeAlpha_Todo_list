import "./App.css";
import Header from "./MyComponents/Header";
import AddForm from "./MyComponents/AddForm";
import Body from "./MyComponents/Body";
import About from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [list, setlist] = useState(() => {
    const storedList = localStorage.getItem("list");
    return storedList ? JSON.parse(storedList) : [];
  });

  const onDel = (todo) => {
    const updatedList = list.filter((item) => item !== todo);
    setlist(updatedList);
  };

  const addList = (title, desc) => {
    const newItem = {
      title: title,
      desc: desc,
    };

    setlist([...list, newItem]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <Router>
        <Header title="ToDo List" searchBar={true} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddForm addList={addList} />
                <Body list={list} onDel={onDel} />
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

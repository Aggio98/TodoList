import "./App.css";
import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.button`
  display: inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
`;

const Text = styled.input`
  border: 2px solid #000;
`;
const TaskCount = styled.span`
  margin: 10px;
`;
const Tasks = styled.div``;

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  const handleClick = () => {
    const id = todoList.length + 1;
    setTodoList((prev) => [...prev, { id: id, task: input, complete: false }]);
    setInput("");
  };

  return (
    <Container>
      <div>
        <h2>TODO LIST</h2>
        <Text value={input} onInput={(e) => setInput(e.target.value)} />
        <Button onClick={() => handleClick()}>Add</Button>
        <Tasks>
          <TaskCount>
            <b>Pending Tasks</b>
          </TaskCount>
          <TaskCount>
            <b>Completed Tasks</b>
          </TaskCount>
        </Tasks>
        <div>
          <ul>/* List items consisting of tasks will be listed here */</ul>
        </div>
        <Button>Clear</Button>
      </div>
    </Container>
  );
}

export default App;

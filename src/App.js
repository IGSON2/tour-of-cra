import React, { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = React.useState("");
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const [todos, setTodos] = React.useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((current) => [todo, ...current]);
    setTodo("");
  };
  React.useEffect(() => console.log(todos), [todos]);
  return (
    <div>
      <h1>You have to do ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To list</button>
      </form>
      <hr />
      {/*Array.map(function((prev)=>prev+(Changes)) 함수 인자를 받는 배열의 map() 메소드를 이용하여 배열을 순회할 수 있다.*/}
      {/*리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에 key를 넣어 고유하게 만들어줘야함*/}
      {/*map()의 두번째 인자는 index이므로 li태그의 key값에 삽입하여 유일성을 부여해줌.*/}
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

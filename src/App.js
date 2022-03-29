import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route path="movie/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//비동기 처리 - 특정 로직의 실행이 끝날 때까지 기다려주지 않고 나머지 코드를 먼저 실행하는 처리 방식
//동기 처리 - 로직의 실행 결과를 기다리는 처리 방식
//콜백 함수를 이용한 비동기 처리- 로직의 흐름이 꼬이는걸 방지하고자, 비동기 함수의 리턴값을 다시 함수 내부에서 콜백 함수로 받아 이어서 처리한다.
//하지만 다중첩 비동기 처리를 하게 되면 계속 콜백함수를 들여써야 하는 콜백지옥이 열리기 때문에 이를 개선할 방법으로 Promise가 제시되었다.
//이는 콜백 함수를 인자로 넘기는 대신에 Promise 객체를 생성하여 리턴한 뒤 리턴값인 Promise의 then() 메소드를 이용해 처리를 이어나간다.

//Promise는 흔히 변수로 할당되기 보다는 함수 내부에서 이렇게 사용된다.
// function returnPromise() {
//   return new Promise((resolve, reject) => { ... } );
// }
//함수 실행 뒤 미래의 예상 결과는 resolve에 할당해주고 예외처리는 reject로 해준다.

//Return된 Promise 객체를 .then() 메서드로 연쇄 호출 하는 예제
// function fetchAuthorName(postId) {
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then((response) => response.json())
//     .then((post) => post.userId)
//     .then((userId) => {
//       return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then((response) => response.json())
//         .then((user) => user.name);
//     });
// }
//그러나 이런 연쇄처리 또한 디버깅이 어렵다는 단점이 있다.

//마지막으로 Promise를 개선하기 위해 async/await 처리가 등장하였다.
// async function fetchAuthorName(postId) {
//   const postResponse = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`
//   );
//   const post = await postResponse.json();
//   const userId = post.userId;
//   const userResponse = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   const user = await userResponse.json();
//   return user.name;
// }
//비동기 함수 선언시 맨 앞에 'async'를 붙여 선언해 주고 함수 내부의 Promise를 리턴하는 모든 비동기 함수 호출부앞에는 'await'를 붙여준다.
//'await' 키워드는 'async'를 붙여 선언한 함수 내부에서만 사용 가능하며, 내부 함수가 결과값을 얻을 때 까지 기다려준다.

//이제 안 사실 : JavaScript는 함수 선언시 매개변수는 타입 없이 선언하고, 리턴은 선언하지 않는다..
//짚어보는 JavaScript의 함수 표현방식
//함수 선언식 : function myFunction (value1,value2){return value1+value2}
//함수 할당식 : const func1 = function(value1,value2){return value1+value2} (Literal)
//함수 할당식2 (Arrow function) : const func1 = (value1,value2) => {return value1+value2}

//Loading처리의 중요성 : Loading중이면 fetch데이터 미 도달로 출력이 안됨

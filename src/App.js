import { useEffect, useState } from "react";
import Btn from "./myButton";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  const [Keyword, setKeyword] = useState();
  const wordChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("Searching", Keyword, "...");
    //useEffect의 Fn 인자에 함수를 return 해 주면 Fn이 끝나기전에 추가로 함수를 실행해 줄 수있다 Go의 defer와 비슷
    return () =>
      setKeyword(
        (perv) => "Search link : " + "http://www.naver.com/search/" + perv
      );
  }, [counter]);

  //useEffect(함수,변화를 감지할 property)
  //useEffect는 Property가 변화할 때 마다 인자로 받는 함수를 실행한다. Property를 지정하지 않으면 오직 한번만 실행된다. Go의 Sync.Once.Do(func(){})와 같음.
  return (
    <div>
      <input
        value={Keyword}
        onChange={wordChange}
        placeholder="Search in here"
        type="text"
      ></input>
      <Btn ifClick={onClick} text={"Search"} />{" "}
      {/*Btn 컴포넌트를 text만 바꾸어 두번 사용해 봤다.*/}
      <h1>Search Result : {Keyword}</h1>
      <h1>{counter}</h1>
      <Btn ifClick={onClick} text={"ThisIsNeverButton"} />
    </div>
  );
}

export default App;

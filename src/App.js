import { string } from "prop-types";
import React, { useEffect, useState } from "react";

function Calculator({ loadend }) {
  const [coins, setCoins] = React.useState([]);
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const onSelect = (event) => {
    const obj = JSON.parse(event.target.value); //JSON.parse() 메서드를 이용해 String 타입 JSON을 분석하여 각각의 키값들을 속성으로 가지는 객체를 반환시킬 수 있다.
    setName(obj.name);
    setPrice(obj.quotes.USD.price);
  };
  const [balance, setBalance] = useState();
  const balanceChange = (event) => {
    setBalance(event.target.value);
  };
  const buttonClick = () => {
    setBalance("");
    setPrice(0);
    setName("");
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=50")
      .then((Response) => Response.json())
      .then((json) => {
        setCoins(json);
        loadend();
      });
  }, []);
  return (
    <div>
      <div>
        <input
          value={balance}
          type={"number"}
          onChange={balanceChange}
          placeholder="Insert your balance"
        ></input>
        <button onClick={buttonClick}>Clear</button>
      </div>

      <select onChange={onSelect}>
        <option key="NOTSELECTED" value={JSON.stringify({ name: "" })}>
          Select coin
        </option>
        {coins.map((coin) => (
          <option key={coin.symbol} value={JSON.stringify(coin)}>
            {/*Json.stringify()메서드를 이용해 json 자체를 string value로 전달해 줄 수 있다.*/}
            {coin.name.toUpperCase()} : ${coin.quotes.USD.price.toFixed(3)} USD
          </option>
        ))}
      </select>

      {balance > 0 && name != "" ? (
        <h2>
          You can buy [{name}] {(balance / price).toFixed(2)} EA
        </h2>
      ) : balance > 0 ? (
        <h2>Please select Coin</h2>
      ) : (
        <h2>Please insert balance</h2>
      )}
    </div>
  );
}

function App() {
  const [loading, setLoading] = React.useState(true);
  const loadend = () => setLoading((current) => !current);
  return (
    <div>
      <h1>How many coins you can buy</h1>
      <hr />
      {loading ? <strong>Loading...</strong> : null}
      <Calculator loadend={loadend} />
    </div>
  );
}

export default App;

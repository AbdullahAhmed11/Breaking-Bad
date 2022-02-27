import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./component/Header";
import Characters from "./component/Characters";

const App = () => {
  //state
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //function to get data
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://breakingbadapi.com/api/characters`);
      // console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <Characters isLoading={isLoading} items={items} />
    </div>
  );
};
export default App;

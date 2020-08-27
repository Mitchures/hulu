import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from "./requests";

function App() {
  const [selected, setSelected] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header/>
      <Nav setSelected={setSelected} />
      <Results selected={selected}/>
    </div>
  );
}

export default App;

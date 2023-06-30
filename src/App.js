import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Article from "./Components/Article";
import Error404 from "./Components/Error404";

function App() {
  return (
    <>
      <Header />
      <main>
        <Article />
      </main>
      <Error404/>
    </>
  );
}

export default App;

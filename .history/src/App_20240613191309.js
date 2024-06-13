import React from "react";
import { Navbar } from "./components/Navbar";

import './App.css'
import { ArticleList } from "./components/ArticleList";
import { Counter } from "./components/Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Counter />
        <ArticleList />
      </div>
    );
  }
}

export default App
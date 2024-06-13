import React from "react";
import { Navbar } from "./components/Navbar";

import './App.css'
import { ArticleList } from "./components/ArticleList";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <ArticleList />
      </div>
    );
  }
}

export default App
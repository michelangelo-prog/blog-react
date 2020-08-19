import React from "react";
import "./App.css";

import BlogPostContextProvider from "../contexts/BlogPostContext";

import Home from "./Home";
import Post from "./PostView";
import Contact from "../components/Contact";
import About from "../components/About";
import Error from "../components/Error";

import Navbar from "../components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BlogPostContextProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/posts/:slug" children={<Post />} />
          <Route component={Error} />
        </Switch>
      </BlogPostContextProvider>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

import BlogPostContextProvider from "../contexts/BlogPostContext";

import Home from "./Home";
import Post from "./Post";
import Contact from "../components/Contact";
import About from "../components/About";
import NoPageFound from "../components/NoPageFound";

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
          <Route exact path="/post/:slug" children={<Post />} />
          <Route component={NoPageFound} />
        </Switch>
      </BlogPostContextProvider>
    </div>
  );
}

export default App;

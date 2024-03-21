import React from "react";
import Router from "./router/router";
import "./App.css";
import SideMenu from "./components/SidebarMenu";
import Header from "./components/Header";

function App() {
  return (
    <>
      <SideMenu />
      <div className="pageContent">
        <Header />
        <Router />
      </div>
    </>
  );
}

export default App;

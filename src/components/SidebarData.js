import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout";

export default function routes() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />{" "}
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

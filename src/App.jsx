import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import {
  Navbar,
  Feedback,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Forum,
  Wallet,
  Footer,
  CreatePost,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className={"app"}>
      <div className={"gradient-bg-welcome"}>
        <Navbar />
      </div>

      <div className={"main"}>
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path={"/"} element={<Homepage />} />
              <Route exact path={"/feedback"} element={<Feedback />} />
              <Route exact path={"/forum"} element={<Forum />} />
              <Route exact path={"/wallet"} element={<Wallet />} />
              <Route
                exact
                path={"/cryptocurrencies"}
                element={<Cryptocurrencies />}
              />
              <Route
                exact
                path={"/crypto/:coinId"}
                element={<CryptoDetails />}
              />
              <Route exact path={"/news"} element={<News />} />
              <Route
                exact
                path={"/button/CreatePost"}
                element={<CreatePost />}
              />
            </Routes>
          </div>
        </Layout>
      </div>

      <div className={"gradient-bg-footer"}>
        <Footer />
      </div>
    </div>
  );
};

export default App;

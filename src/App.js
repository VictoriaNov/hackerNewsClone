import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import ShowStories from "./components/ShowStories";
import RedirectToTopStories from "./components/HOC/RedirectToTopStories";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<RedirectToTopStories redirectPath="news/top" />}
        />
        <Route path="news/:type" element={<ShowStories />} />
        {/* Не смогла редайректнуть на /news/top (см код ниже). Костыльно обезопасилась в apis.js */}
        {/* <Route path="news/:type" element={<RedirectToTopStories isAllowed={['top', 'best', 'new'].includes(type)} redirectPath="news/top"><ShowStories /></RedirectToTopStories>} /> */}
        
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

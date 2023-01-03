import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../companents/nav/Navbar";
import News from "../pages/news/News";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav";
import Home from "./Pages/Home/Home";
import Favorites from "./Pages/Favorites/Favorites";
import Missing from "./Pages/Missing/Missing";
import Recents from "./Pages/Recents/Recents";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Movie from "./Pages/Movie/Movie";
import Search from "./Pages/Search/Search";
import About from "./Pages/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routes>
            <Route exact path="/recents" element={<Recents />} />
            <Route exact path="/favorites" element={<Favorites />} />
            <Route exact path="/trending" element={<Trending />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route exact path="/movie/:id" element={<Movie />} />
            <Route exact path="/tv/:id" element={<Movie radioValue="tv" />} />
            <Route exact path="/recents" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/*" element={<Missing />} />
            <Route exact path="/" element={<Trending />} />
          </Routes>
        </div>
        <MainNav />
      </BrowserRouter>
    </>
  );
}

export default App;

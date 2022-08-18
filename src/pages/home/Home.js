import React, { useState, useEffect } from "react";
import "./Home.css";
import { Outlet } from "react-router-dom";
import Input from "../../components/input/Input";
import Trendings from "../../components/trendings/Trendings";
import Gifs from "../../components/gifs/Gifs";
import Stickers from "../../components/stickers/Stickers";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  const [input, setInput] = useState("funny");
  const [getGifs, setGetGifs] = useState(false);
  const [gifs, setGifs] = useState();
  const [stickers, setStickers] = useState();
  const [trendingGifs, setTrendingGifs] = useState();
  const [view, setView] = useState(false);
  const [searchHistory, setSearchhistory] = useState(
    window.localStorage.getItem("search") || [],
  );

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setGetGifs(!getGifs);
    setSearchhistory((prevValue) => {
      console.log(prevValue);
      window.localStorage.setItem(
        "search",
        JSON.stringify([
          ...(JSON.parse(window.localStorage.getItem("search")) || []),
          input,
        ]),
      );
    });
  };

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=zyAZNJgY57i0n3Fiq66vt2on53t0mkIj&q=${input}&limit=10`,
    )
      .then((res) => res.json())
      .then((data) => {
        setGifs(data.data);
      })
      .catch((err) => console.log(err));
  }, [getGifs]);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/stickers/search?api_key=zyAZNJgY57i0n3Fiq66vt2on53t0mkIj&q=${input}&limit=10`,
    )
      .then((res) => res.json())
      .then((data) => {
        setStickers(data.data);
      })
      .catch((err) => console.log(err));
  }, [getGifs]);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=zyAZNJgY57i0n3Fiq66vt2on53t0mkIj&limit=10`,
    )
      .then((res) => res.json())
      .then((data) => {
        setTrendingGifs(data.data);
      })
      .catch((err) => console.log(err));
  }, [getGifs]);

  if (!gifs) {
    return <>Loading ...</>;
  }

  return (
    <>
      <div className="home">
        <Navbar setView={setView} />
        <Input handleInput={handleInput} handleSearch={handleSearch} />

        {view ? (
          <Outlet context={{ gifs, stickers, trendingGifs }} />
        ) : (
          <>
            <Gifs
              gifs={gifs}
              classNameParent="trendingContainer"
              classNameClildren="trendingHomeContainer"
            />
            <Trendings
              trendingGifs={trendingGifs}
              classNameParent="trendingContainer"
              classNameClildren="trendingHomeContainer"
            />
            <Stickers
              stickers={stickers}
              classNameParent="trendingContainer"
              classNameClildren="trendingHomeContainer"
            />
          </>
        )}
      </div>
    </>
  );
};

export default Home;

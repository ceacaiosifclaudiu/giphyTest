import React from "react";
import Trendings from "../../components/trendings/Trendings";
import "./Trending.css";
import { useOutletContext } from "react-router-dom";

const Trending = () => {
  const trendingGifs = useOutletContext();
  const trendingGifsNew = trendingGifs.trendingGifs;
  return (
    <div className="contentContainer">
      {trendingGifsNew.map(
        ({
          images: {
            downsized: { url },
          },
        }) => {
          return (
            <div className="bodyContainerCards" key={url}>
              <img src={url} alt="" />
            </div>
          );
        },
      )}
    </div>
  );
};

export default Trending;

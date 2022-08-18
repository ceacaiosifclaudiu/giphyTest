import React from "react";
import "./Tredings.css";

const Trendings = ({ trendingGifs, classNameClildren, classNameParent }) => {
  if (!trendingGifs) {
    return <>Loading ...</>;
  }

  return (
    <div className={`${classNameParent}`}>
      <h1>Trending</h1>
      <div className={`${classNameClildren}`}>
        {trendingGifs.map(
          ({
            images: {
              downsized: { url },
            },
          }) => {
            return <img src={url} alt="" key={url} />;
          },
        )}
      </div>
    </div>
  );
};

export default Trendings;

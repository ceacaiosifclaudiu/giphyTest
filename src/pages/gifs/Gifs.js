import React from "react";
import "./Gifs.css";
import { useOutletContext } from "react-router-dom";
import GifsComponent from "../../components/gifs/Gifs";

const Gifs = () => {
  const gifs = useOutletContext();
  const gifsNew = gifs.gifs;

  if (!gifs) {
    return <>Loading ...</>;
  }

  return (
    <div className="contentContainer">
      {gifsNew.map(
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

export default Gifs;

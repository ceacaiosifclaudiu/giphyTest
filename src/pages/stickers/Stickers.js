import React, { useState, useEffect } from "react";
import "./Stickers.css";
import { useOutletContext } from "react-router-dom";

const Stickers = () => {
  const stickers = useOutletContext();
  const stickersNew = stickers.stickers;
  if (!stickers) {
    return <>Loading ...</>;
  }
  return (
    <div className="contentContainer">
      {stickersNew.map(
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

export default Stickers;

import React from "react";
import "./Stickers.css";

const Stickers = ({ stickers, classNameClildren, classNameParent }) => {
  if (!stickers) {
    return <>Loading ...</>;
  }

  return (
    <div className={`${classNameParent}`}>
      <h1>Stickers</h1>
      <div className={`${classNameClildren}`}>
        {stickers.map(
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

export default Stickers;

import React from "react";

const Gifs = ({ gifs, classNameClildren, classNameParent }) => {
  if (!gifs) {
    return <>Loading ...</>;
  }

  return (
    <div className={`${classNameParent}`}>
      <h1>Gifs</h1>
      <div className={`${classNameClildren}`}>
        {gifs.map(
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

export default Gifs;

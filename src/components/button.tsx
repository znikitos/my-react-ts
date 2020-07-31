import React from "react";

interface ButtonProps {
  index: number;
  increment(): void;
}
const Banner: React.FC<ButtonProps> = ({ index, increment }) => {
  return (
    <>
      <button
        aria-hidden="true"
        type="button"
        className="container"
        onClick={(): void => {
          increment();
        }}
      >
        ---{index}---
      </button>
    </>
  );
};

export default Banner;

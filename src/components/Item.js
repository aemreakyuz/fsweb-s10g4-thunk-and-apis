import React from "react";
import { useSelector } from "react-redux";

function Item({ data }) {
  const current = useSelector((store) => store.data.current);

  return (
    <div className="shadow-md bg-white text-center">
      <p className="text-2xl p-10">
        <img src={current} alt="goodBoy" />
      </p>
    </div>
  );
}

export default Item;

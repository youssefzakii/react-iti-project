/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Cartitem from "./Cartitem";
export default function Cart(props) {
  // console.log(props)
  const { items, handleDecrement, handleIncrement, handleDelete, handleReset } =
    props;
  return (
    <>
      <div>
        {items.map((itm) => (
          <Cartitem
            key={itm.id}
            name={itm.name}
            count={itm.count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
            id={itm.id}
          ></Cartitem>
        ))}
      </div>
      {items.length > 0 && (
        <button onClick={handleReset} className="btn btn-sm ml-2">
          Reset
        </button>
      )}
      {items.length === 0 && (
        <h2 className="text-center">Oobs! Cart is empty, add some food!</h2>
      )}
    </>
  );
}

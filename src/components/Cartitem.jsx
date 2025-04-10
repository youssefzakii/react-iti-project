/* eslint-disable react/prop-types */
// import React, { useState } from 'react'
export default function Cartitem(props) {
  console.log(props);


  return (
    <>
      <div className="flex gap-2 p-2">
        <div style={{ color: "red" }}>{props.name}</div>
        <div className={`w-4 text-center ${props.count ? "bg-green-200" : "bg-amber-200"}`}>{props.count}</div>
        <button onClick={() => props.handleIncrement(props.id)} className="w-4 bg-gray-100 md:bg-amber-500">
          +
        </button>
        <button onClick={() => props.handleDecrement(props.id)} className='w-4 bg-red-500'>
          -
        </button>

        <button onClick={() => props.handleDelete(props.id)} className='border border-gray-400'>Delete</button>

      </div>
    </>
  )
}

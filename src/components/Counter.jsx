/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { useEffect, useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    useEffect(() => {
        setCount(0)
        const id = setInterval(() => {
            setCount((prevCount) => {
                return prevCount + 1
            })
        }, 1000)

        return () => {
            console.log('cleanup');
            clearInterval(id)
        }
    }, [count1])

    const handleClick = () => {
        setCount1(count1 + 1)
    }

    return <>
        <div> Counter: {count} </div>
        <button className="btn" onClick={handleClick}>
            counter1: {count1}
        </button>
    </>
}

// import React from 'react'

import { useEffect, useState } from "react"
import Counter from "../Counter"

export default function Home() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const handleClick1 = () => {
        setCount1(count1 + 1)
    }
    const handleClick2 = () => {
        setCount2(count2 + 1)
    }

    useEffect(() => {
        console.log("Effect");

        //Cleanup function
        return () => {
            console.log("Cleanup!")
        }
    }, [count1])

    console.log("Render");


    return (
        <div>
            <h1>Home Page</h1>
            <Counter />
            {/* <button onClick={handleClick1} className="btn btn-accent btn-sm mr-3">
                Count1: {count1}
            </button>
            <button onClick={handleClick2} className="btn btn-accent btn-sm">
                Count2: {count2}
            </button> */}
        </div>
    )
}

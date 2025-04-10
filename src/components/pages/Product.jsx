// import React from 'react'

import { useParams, useSearchParams } from "react-router"

export default function Product() {
    const { id } = useParams()
    // const [URLSearchParams] = useSearchParams()
    // const year = URLSearchParams.getAll("year")

    return <>
        <div>Product: {id}</div>
        {/* <div>{year}</div> */}
    </>
}

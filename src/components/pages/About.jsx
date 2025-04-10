// import React from 'react'
import { Outlet, useLocation } from "react-router"
import { Link } from "react-router"

//shared layout
export default function About() {
    // const x = useLocation()
    // console.log(x);

    return (
        <div className="flex gap-4">
            <div className="w-[200px]">
                <ul>
                    <li>
                        <Link to="/about/company" className="p-3 border block">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link to="/about/people" className="p-3 border block">
                            About people
                        </Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}

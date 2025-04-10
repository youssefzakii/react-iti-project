/* eslint-disable react/prop-types */
// import React from 'react'

import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

export default function ProductForm({ categories, handleAddNewProduct }) {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: "",
        price: "",
        category: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const productToAdd = { ...form, count: 0, isInCart: false }
        //validate
        //call backend
        const { data } = await axios.post("http://localhost:3000/menu", productToAdd)
        //add data frontend in state in the app component
        handleAddNewProduct(data)
        //navigate to admin
        navigate("/admin")
        toast("Product added successfuly!!")
    }

    console.log(form, categories)

    return <div className="max-w-xl mt-3 mx-auto">
        <h1 className="text-xl mb-3 font-bold">Add new product</h1>
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} type="text" value={form.name} name="name" id="name" className="input" />
            </div>
            <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="price">Price</label>
                <input onChange={handleChange} type="text" value={form.price} name="price" id="price" className="input" />
            </div>
            <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="category">Category</label>
                <select onChange={handleChange} name="category" value={+form.category} id="category" className="input">
                    {[...categories].splice(1).map(c => (
                        <option key={c.id} value={+c.id}>{c.name}</option>
                    ))}
                    <option value="1">Burger</option>
                </select>
            </div>

            <button className="btn btn-primary">Add</button>
        </form>

    </div>

}

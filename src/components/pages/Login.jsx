// import React from 'react'

import { useRef, useState } from "react"
import { object, string } from "yup"

export default function Login() {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: null,
        password: null
    })

    const formSchema = object({
        email: string().required(),
        password: string().required()
    })

    const handleChange = (e) => {
        setErrors({ email: null, password: null })
        //clone
        const newForm = { ...form }
        //edit
        newForm[e.target.name] = e.target.value
        //update
        setForm(newForm)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //validate
        try {
            const x = formSchema.validateSync(form, { abortEarly: false })
            console.log(x);
        } catch (error) {
            console.dir(error);
            error.inner.forEach((err) => setErrors((prevError) => ({ ...prevError, [err.path]: err.message })))
        }
    }

    console.log(errors);

    return (
        <div>
            <form className="p-3">
                <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email: </label>
                    <input
                        onChange={handleChange}
                        value={form.email}
                        name="email"
                        id="email" type="text" className="input input-xs"
                    />
                    {errors.email && <span className="text-xs text-red-600">{errors.email}</span>}
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password">Password: </label>
                    <input
                        onChange={handleChange}
                        value={form.password}
                        name="password"
                        id="password" type="text" className="input input-xs"
                    />
                    {errors.password && <span className="text-xs text-red-600">{errors.password}</span>}
                </div>
                <button onClick={handleSubmit} className="btn mt-2">Submit</button>
            </form>
        </div>
    )
}

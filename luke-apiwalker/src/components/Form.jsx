import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'// hook used by hook router dom

const Form = () => {

    const [starNum, setStarNum] = useState(1)

    const [starWars, setStarWars] = useState("people")

    const nav = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(starNum)
        nav(`/${starWars}/${starNum}`)
    }

    return (
        <>
            <h1>Search For:</h1>
            <form onSubmit={submitHandler} class="display">

                <select class="form-select" onChange={(e) => setStarWars(e.target.value)} value={starWars} >
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <input type="number" min="1" onChange={(e) => setStarNum(e.target.value)} value={starNum} />
                <button>Search</button>
            </form>
        </>
    )
}

export default Form
import React, { useEffect, useState } from 'react'// useEffect is when component renders and want to display data
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Error = (props) => {

    const [jedi, setJedi] = useState(null)//useState holds a value and use it when something changes in the object

    const { obiId } = useParams(); //to grab data 
    console.log(useParams);
    console.log(obiId);

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/10")
            .then(res => {
                console.log(res.data);
                setJedi(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (

        <div>
            {
                jedi ? (
            <>
                <h1 style={{ color: "red" }}>**These aren't the droids you're looking for**</h1>
                <h2>{jedi.name}</h2>
                <img src="https://thumbs.dreamstime.com/b/close-up-s-h-figuarts-star-wars-obi-wan-kenobi-display-tokyo-japan-october-close-up-s-h-figuarts-star-wars-obi-wan-132529018.jpg" alt="obi" />
            </>

                ) : <>Loading...</>
            }
        </div>
    )
}

export default Error
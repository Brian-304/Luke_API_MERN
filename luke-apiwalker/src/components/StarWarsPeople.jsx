import React, { useEffect, useState } from 'react'; 
import { useParams, useNavigate } from 'react-router';
import axios from 'axios'; // axios to make requests to swapi

const StarWarsPeople = (props) => {

    const [people, setPeople] = useState({}) // people is the current state and setPeople is a method that will update the peopele state

    
    const nav = useNavigate() //navigate to page without buttons

    const { peopleId } = useParams();
    // console.log(useParams());
    console.log(peopleId);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${peopleId}`) 
            .then(res => {
                console.log(res.data);
                setPeople(res.data)
            })
            .catch(err => {
                console.log("Does not exist", err)
                nav("/error", {replace: true})
            })
    }, [])

    return (
        <>
            <h1 style={{ color: "red" }}>People Component </h1>
            <br />
            {/* {JSON.stringify(people)} */}
            <h1>Name: {people.name}</h1>
            <h1>Height: {people.height}</h1>
            <h1>Mass: {people.mass}</h1>
            <h1>Hair Color: {people.hair_color}</h1>
            <h1>Skin Color: {people.skin_color}</h1>
        </>
    );
}



export default StarWarsPeople
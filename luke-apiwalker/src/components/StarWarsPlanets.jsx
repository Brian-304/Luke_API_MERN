import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router';
import axios from 'axios'; // axios to make requests to swapi

const StarWarsPlanets = (props) => {

    const [planet, setPlanets] = useState([]) // people is the current state and setPeople is a method that will update the peopele state

    
    const nav = useNavigate() //navigate to page without buttons

    const { planetId } = useParams();
    // console.log(useParams());
    console.log(planetId);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${planetId}`) 
            .then(res => {
                console.log(res.data);
                setPlanets(res.data)
            })
            .catch(err => {
                console.log("Does not exist", err)
                nav("/error", {replace: true})
            })
    }, [])

    return (
        <>
            <h1 style={{ color: "blue" }}>Planets Component </h1>
            <br />
            {/* {JSON.stringify(planet)} */}
            <h1>Name: {planet.name}</h1>
            <h1>Climate: {planet.climate}</h1>
            <h1>Terrain: {planet.terrain}</h1>
            <h1>Surface Water: {planet.surface_water}</h1>
            <h1>Population: {planet.population}</h1>
        </>
    )
}

export default StarWarsPlanets
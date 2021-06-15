import './Card.css'
import { useState, useEffect } from 'react'

const Card = ({ id }) => {
    const [char, setChar] = useState()


    const getChar = (id) => {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => setChar(data))


    }

    !char && getChar(id)
    console.log(char);

    return (
        <div className='singleCard'>
            <img alt='' src={char.name}></img>

        </div>
    )
}

export { Card }
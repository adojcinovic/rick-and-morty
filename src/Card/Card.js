import './Card.css'
import { useState } from 'react'

const Card = ({ id }) => {
    const [char, setChar] = useState([])


    const getChar = (id) => {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const singleChar = data.name
                setChar(singleChar)
            })

    }

    // const bla = getChar(id)
    !char && getChar()
    console.log(char);

    return (
        <div className='singleCard'>
            <img alt='' src={char.name}></img>

        </div>
    )
}

export { Card }
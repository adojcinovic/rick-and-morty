import { useState } from 'react';
import { Character } from '../Character/Character'
import './List.css'

const List = ({ onIdChange }) => {
    const [list, setList] = useState([])

    const getData = () => {
        return fetch(`https://rickandmortyapi.com/api/character/?page=1`)
            .then(response => response.json())
            .then(data => {
                const characters = data.results
                setList(characters)
            })
    }

    !list.length && getData()
    console.log(list);
    return (
        <div className='container'>
            {list.map((e) => (
                <Character data={e} onIdChange={onIdChange} />
            ))}
        </div>
    )
}

export { List }
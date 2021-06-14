import './Character.css'

const Character = ({ data, onIdChange }) => {

    return (
        <div className='card' onClick={() => onIdChange(data.id)}>
            <img alt='' src={data.image}></img>
            <p>{data.name}</p>
        </div>
    )
}

export { Character }
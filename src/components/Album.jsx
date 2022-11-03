import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Album (props) {
    const [hover, setHover] = useState(false)


    return (
        <Link to={`/albums/${props.vals._id}`}>
        <div
        className={`album ${hover ? `hover` : ``}`}
        onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}
        onClick={()=> props.setCurrentAlbum(props.vals)}>
            <img src={props.vals.img} />
            <h3>{props.vals.title}</h3>
            <h4>{props.vals.releaseYear}</h4>
        </div>
        </Link>
    )
}

export default Album

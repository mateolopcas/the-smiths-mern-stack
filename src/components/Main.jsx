function Main(props) {
    


    return (
        <div className='main'>
        <img src={props.vals.img} />
        <h2>{props.vals.title}</h2>
        <ol>
            {props.vals.songs.map((song, index)=> {
                return (
                    <li key={index}>{song}</li>
                )
            })}
        </ol>
        <p>{props.vals.review}</p>
        </div>
    )
}

export default Main

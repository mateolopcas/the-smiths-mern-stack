function Sidebar(props) {
    let goldImg = 'https://media.istockphoto.com/vectors/golden-lp-black-vector-id610144376?k=20&m=610144376&s=612x612&w=0&h=Rpq8lk7PLkZ0e2k0Ve6lU0lM3IS8iC78E01tArqZiSo='
    let platImg='https://cdn.shopify.com/s/files/1/0040/9206/7951/products/14x14Platinum_Achievement_ed8eac26-cc4e-41f9-907d-5a49c54f1381_1000x.jpg?v=1612889405'

    return (
        <div className='sidebar'>
        <ul>
            <li>{props.vals.genre}</li>
            <li>{props.vals.albumType} album</li>
            <li>Recorded in {props.vals.yearRecorded}</li>
            <li>Released in {props.vals.releaseYear}</li>
            <li>{props.vals.label}</li>
            <li>Highest UK chart position: {props.vals.ukChartPosition}</li>
            <li>UK Awards:
                {props.vals.ukGold === true &&
                <img src={goldImg}
                style={{width: '50px', height: '50px'}}/>}
                {props.vals.ukPlatinum === true &&
                <img src={platImg}
                style={{width: '50px', height: '50px'}}/>}
            </li>
            <li>US Awards:
                {props.vals.usGold === true &&
                <img src={goldImg}
                style={{width: '50px', height: '50px'}}/>}
            </li>
            <li><a href={props.vals.appleMusicLink} target='blank'>Listen on Apple Music</a></li>
            <li><a href={props.vals.spotifyLink} target='blank'>Listen on Spotify</a></li>
        </ul>

        </div>
    )
}

export default Sidebar

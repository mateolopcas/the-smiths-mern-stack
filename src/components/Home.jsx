import axios from 'axios'
import { useState, useEffect } from 'react'

import Header from './Header'
import Album from './Album'

function Home(props) {
    let albumsURL = 'https://thesmiths-api-production.up.railway.app/albums'
    let [albums, setAlbums] = useState([])

    let getAlbums = async () => {
        let albumsData = await axios.get(albumsURL)
        console.log(albums)
        setAlbums(albumsData.data)
    }

    useEffect(() => {
        getAlbums()
    }, [])


    return (
        <div className='home'>
            <Header />
            <h1>The Smiths Discography</h1>
            <div className='albumsDiv'>
            {albums &&
                albums.map((album, index)=> {
                    return (
                        <Album
                        key={album.index}
                        vals={album}
                        setCurrentAlbum={props.setCurrentAlbum}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}

export default Home

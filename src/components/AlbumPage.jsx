import Sidebar from './Sidebar.jsx'
import Main from './Main.jsx'
import Header from './Header'
import {useEffect} from 'react'

function AlbumPage (props) {
    let albumURL = 'https://thesmiths-api-production.up.railway.app/albums/'
    console.log(props.vals)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>
            <Header />
            <div className='albumContent'>
            <Sidebar vals={props.vals}/>
            <Main vals={props.vals}/>
            </div>
        </div>
    )
}

export default AlbumPage

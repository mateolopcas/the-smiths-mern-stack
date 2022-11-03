import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from './components/Home.jsx'
import AlbumPage from './components/AlbumPage.jsx'

function App() {
    let [currentAlbum, setCurrentAlbum] = useState({})


    return (
        <div className="App">
        <Routes>
            <Route path='/' element=
                {<Home setCurrentAlbum={setCurrentAlbum} />} />
            <Route path='/albums/:id' element=
                {<AlbumPage vals={currentAlbum} />} />
        </Routes>
        </div>
    );
}

export default App;

import {Link} from 'react-router-dom'

function Header (props) {
    return (
        <header>
            <Link to='/'>Back</Link>
            <div>This is a header</div>
        </header>
    )
}

export default Header

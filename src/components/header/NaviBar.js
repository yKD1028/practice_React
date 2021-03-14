import { Link } from 'react-router-dom'

const NaviBar = () => {
    return (
        <nav className='navi'>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>

                <Link to='/gallery'>
                    <li>Gallery</li>
                </Link>

                <Link to='/about'>
                    <li>About</li>
                </Link>

                
                <li>
                    <a href="mailto:kodai.developer@gmail.com">Contact</a>
                </li>
                
            </ul>
        </nav>
    )
}

export default NaviBar

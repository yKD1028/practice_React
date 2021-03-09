import { Link } from 'react-router-dom'

const NaviBar = () => {
    return (
        <nav className='navi'>
            <ul>
                <Link to='/'>
                    <li>HOME</li>
                </Link>

                <Link to='/museum'>
                    <li>MUSEUM</li>
                </Link>

                <Link>
                    <li>ABOUT</li>
                </Link>

                <Link>
                    <li>SKILL</li>
                </Link>

                <Link>
                    <li>CONTACT</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NaviBar

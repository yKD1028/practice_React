import { Link } from 'react-router-dom'

const NaviBar = () => {
    return (
        <nav className='navi'>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>

                <Link to='/museum'>
                    <li>Museum</li>
                </Link>

                <Link>
                    <li>About</li>
                </Link>

                <Link>
                    <li>Skill</li>
                </Link>

                <Link>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NaviBar

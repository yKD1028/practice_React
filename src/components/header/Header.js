import React from 'react'
import Logo from './Logo'
import NaviBar from './NaviBar'


const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <NaviBar /> 
        </div>
    )
}

export default Header


// Header.defaultProps = {
//     title: 'hage',
// }
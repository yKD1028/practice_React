import React from 'react'
import Logo from './Logo'
import Topimage from './logo.png'
import NaviBar from './NaviBar'


const Header = () => {
    return (
        <div className='header'>
            <Logo 
                img={Topimage}
            />
            <NaviBar /> 
        </div>
    )
}

export default Header


// Header.defaultProps = {
//     title: 'hage',
// }
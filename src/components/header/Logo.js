import React from 'react'

const Logo = (props) => {
    return (
        <>
            <h1>
                <img src={props.img} alt="logo" />
            </h1>
        </>
    )
}
export default Logo
import React from 'react'
import PropTypes from 'prop-types';

export default function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.num}</p>
        </div>
    )
}

Header.defaultProps = {
    title: 'hage',
}

Header.propTypes = {
    title: PropTypes.string,
    num: PropTypes.number,
}
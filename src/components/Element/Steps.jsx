import React, { Children } from 'react'
import { Link } from 'react-router-dom'
const Steps = (props) => {
    const { children } = props
    return (
        <ul className='steps steps-vertical'>
            {children}
        </ul>
    )
}

const ListElement = (props) => {
    const { title, links } = props
    return (
        <li className='step step-accent'>
            <Link to={links}>{title}</Link>
        </li>
    )
}

Steps.ListElement = ListElement

export default Steps
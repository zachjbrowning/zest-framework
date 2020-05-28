import React from 'react'

export default function Header(props) {
    return (
        <div className="content-header container">
            {props.title}
            <div className="line"></div>
        </div>
    )
}

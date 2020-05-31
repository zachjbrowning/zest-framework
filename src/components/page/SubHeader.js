import React from 'react'
import parse from '../parse'

export default function Header(props) {
    
    return (
        <div className={"content-sub-header " + (props.class ? props.class : '')}  style={props.style}>
            {parse(props.header)}
        </div>
    )
}
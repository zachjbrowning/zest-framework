import React from 'react'

export default function Header(props) {
    let stuff = props.header.map((text, index) => {
            if (text[0] !== '<') {
                return text
            } else if (text[0] === '<' && text[2] === '>') {
                if (text[1] === 'b') {
                    return <strong key={index}>{text.slice(3)}</strong>
                } else if (text[1] === 'i') {
                    return <i key={index}>{text.slice(3)}</i>
                } else if(text[1] === 'z') {
                    return <strong key={index}><i>{text.slice(3)}</i></strong>
                } 
            } 
            return text
        });
    
    return (
        <div className="content-sub-header"  style={props.style}>
            {stuff}
        </div>
    )
}
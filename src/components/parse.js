import React from 'react'

export default function parse(array) {
    return array.map((text, index) => {
        if (text[0] !== '<') {
            return text
        } else {
            if (text[1] === 'b') {
                return <strong key={index}>{text.slice(3)}</strong>
            } else if (text[1] === 'i') {
                return <i key={index}>{text.slice(3)}</i>
            } else if(text[1] === 'z') {
                return <strong key={index}><i>{text.slice(3)}</i></strong>
            } else if (text[1] == 'a') {
                return <a key={index} className="parsed-link" href={text.slice(3,text.indexOf('>'))}>&nbsp;{[text.slice(text.indexOf('>') + 1)]}</a>
            }
            return text
        } 
    })
}
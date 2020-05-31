import React from 'react'

export default function parse(array) {
    if (!array) {
        throw new Error("You seem to have forgotten to pass in a necessary text item. Please make sure they are all defined!")
    } else if (!Array.isArray(array)) {
        throw new Error("One of your text items is not mappable. This means it's probably not an array - don't forget the []!")
    }
    return array.map((text, index) => {
        if (text[0] !== '<') {
            return text
        } else {
            if (text[1] === 'b') {
                return <strong key={index}>{parse([text.slice(3)])}</strong>
            } else if (text[1] === 'i') {
                return <i key={index}>{parse([text.slice(3)])}</i>
            } else if (text[1] == 'a' && text[2] == '=') {
                return <a key={index} className="parsed-link" href={text.slice(3,text.indexOf('>'))}>{parse([text.slice(text.indexOf('>') + 1)])}</a>
            } else if (text[1] == 'c' && text[2] == '=') {
                return <span style={{color : text.slice(3,text.indexOf('>'))}}>{parse([text.slice(text.indexOf('>') + 1)])}</span>
            }
            return text
        } 
    })
}
import React from 'react'

//CHANGE TO LAZY LOAD AS WELL
import Glossary from './special/Glossary'



export default function Special(props) {
    return (
        <Glossary section={props.section}/>
    )
}

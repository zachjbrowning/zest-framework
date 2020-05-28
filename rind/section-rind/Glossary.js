import React from 'react'
import SubHeader from '../../src/components/page/SubHeader'

/*
To use the Glossary section, the section in the json file must contain the item "glossary", who's value is an array of ["word",["id_to_link_to"]]. Clicking on that word will then scroll to the element with the given id. (Use the id option in sections to allocate them).

Glossary css is written in glosary.css then included in rind.css.

*/

export default function Glossary(props) {
    
    return (
        <div className={"content-frame " + props.section['class']}>
            <div className="container glossary">
                <SubHeader header={props.section['header-text']}/> 
                {props.section['glossary'].map((item, index) => (
                    <div className="glossary-link" key={index} onClick={() => {document.documentElement.scrollTo({top:document.getElementById(item[1]).offsetTop-70,behavior:'smooth'})}}>
                        {'\t- '}<strong>{item[0]}</strong>
                    </div>
                ))}
            </div>
        </div>
    )
}

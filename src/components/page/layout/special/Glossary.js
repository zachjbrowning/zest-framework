import React from 'react'
import SubHeader from '../../SubHeader'



export default function Glossary(props) {
    return (
        <div className={"content-frame " + props.section['class']}>
            <div className="container glossary">
                <SubHeader header={props.section['header-text']}/> 
                {props.section['metadata']['glossary'].map((item, index) => (
                    <div className="glossary-link" key={index} onClick={() => {document.documentElement.scrollTo({top:document.getElementById(item[1]).offsetTop-70,behavior:'smooth'})}}>
                        {'\t- '}<strong>{item[0]}</strong>
                    </div>
                ))}
            </div>
        </div>
    )
}

import React from 'react'

///CHANGE TO LAZY LOAD
import Layout from './Layout'
import SectionSwitchboard from '../../../rind/SectionSwitchboard'


export default function Section(props) {
    
    let section_rind = SectionSwitchboard(props.section)
    if (section_rind) {
        return section_rind
    } else if ("first" in props.section || props.section['layout'] == 1 || props.section['layout'] == 2 || props.section['layout'] == 3) {
        return <Layout section={props.section}/>
    } else {
        return null
    }
    
}

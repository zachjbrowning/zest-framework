import React from 'react'

///CHANGE TO LAZY LOAD
import Layout from './Layout'
import SectionSwitchboard from '../../../rind/SectionSwitchboard'


export default function Section(props) {
    
    let section_rind = SectionSwitchboard(props.section)
    let layout;
    if ('layout' in props.section) {
        layout = props.section['layout']
    }
    if (section_rind) {
        return section_rind
    } else if ("first" in props.section || layout == 1 || layout == 2 || layout == 3) {
        return <Layout section={props.section} layout={layout}/>
    } else {
        return null
    }
    
}

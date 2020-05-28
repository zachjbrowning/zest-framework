import React from 'react'

///CHANGE TO LAZY LOAD
import Layout_1 from './layout/Layout_1';
import Layout_2 from './layout/Layout_2';
import Special from './layout/Special'


export default function Section(props) {

    
    if (props.section['layout'] == 1) {
        return <Layout_1 section={props.section}/>
    } else if (props.section['layout'] == 2) {
        return <Layout_2 section={props.section}/>
    } else if (props.section['layout'] < 0) { 
        return <Special section={props.section}/>
    } else {
        return <div className="content-frame">BRUHHH</div>
    }
    
}

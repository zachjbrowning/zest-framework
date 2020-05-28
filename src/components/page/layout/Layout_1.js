import React from 'react'
import Block from '../Block'
import PropTypes from 'prop-types'
import SubHeader from '../SubHeader'

export default function Layout_1(props) {
    return ( 
        <div id={('id' in props.section ? props.section['id'] : '')} className={"content-frame " + ('class' in props.section ? props.section['class'] : '')} style={'style' in props.section ? props.section['style'] : {}}>
            <div className="container" style={'container-style' in props.section ? props.section['container-style'] : {}}>
                {'header-text' in props.section ? <SubHeader header={props.section['header-text']} style={props.section['header-style']}/> : ''}
                {'first' in props.section ? <Block block={props.section['first']}/> : ''}
            </div>
        </div>
    )
}

Layout_1.propTypes = {
    section: PropTypes.object
}
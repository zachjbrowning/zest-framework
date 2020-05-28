import React from 'react'
import SubHeader from '../SubHeader'
import Block from '../Block'
import PropTypes from 'prop-types'

export default function Layout_2(props) {
    return (
        <div id={('id' in props.section ? props.section['id'] : '')} className={"content-frame " + ('class' in props.section ? props.section['class'] : '')} style={'style' in props.section ? props.section['style'] : {}}>
            <div className="container" style={'container-style' in props.section ? props.section['container-style'] : {}}>
                {'header-text' in props.section ? <SubHeader header={props.section['header-text']} style={props.section['header-style']}/> : ''}
                <div className="block-2">
                    {'first' in props.section ? <Block block={props.section['first']}/> : ''}
                    {'second' in props.section ? <Block block={props.section['second']}/> : ''}
                </div>
            </div>
        </div>
    )
}


Layout_2.propTypes = {
    section: PropTypes.object
}
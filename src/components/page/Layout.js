import React from 'react'
import Block from './Block'
import PropTypes from 'prop-types'
import SubHeader from './SubHeader'

export default function Layout(props) {
    let first;
    let no = 0;
    if ('first' in props.section) {
        first = <Block block={props.section['first']}/>
        no++
    }
    let second;
    if ('second' in props.section) {
        second = <Block block={props.section['second']}/>
        no++
    }
    let third;
    if ('third' in props.section) {
        third = <Block block={props.section['third']}/>
        no++
    }
    if (props.layout) {
        no = props.layout
    }
    
    
    
    
    return ( 
        <div id={('id' in props.section ? props.section['id'] : '')} className={"content-frame " + ('class' in props.section ? props.section['class'] : '')} style={'style' in props.section ? props.section['style'] : {}}>
            <div className="container" style={'container-style' in props.section ? props.section['container-style'] : {}}>
                {'header-text' in props.section ? <SubHeader header={props.section['header-text']} style={props.section['header-style']}/> : ''}
                <div className={"block-" + no}>
                    {first}
                    {(no > 1 ? second : '')}
                    {(no > 2 ? third : '')}
                </div>
            </div>
        </div>
    )
}

Layout.propTypes = {
    section: PropTypes.object
}
import React from 'react'
import parser from '../parse'
import SubHeader from './SubHeader'
import PropTypes from 'prop-types'

export default function Block(props) {
    let stuff;
    if ('text' in props.block) {
        stuff = parser(props.block['text']);
    } else if ('img' in props.block) {
        stuff = <div className="img-holder">
                <img className="img" src={'/public/' + props.block['img'][0]} alt="Image couldn't be loaded"/>
                {props.block['img'].length > 1 ? <div className="img-text" >{props.block['img'][1]}</div> : ''}
            </div>
    }
    
    let head;
    if ('header-text' in props.block) {
        head = <SubHeader header={props.block['header-text']} style={props.block['header-style']}/>
    }
    
    return (
        <div className={"block " + ('class' in props.block ? props.block['class'] : '')} style={'style' in props.block ? props.block['style'] : {}}>
            {head}{stuff}
        </div>
    )
}


Block.propTypes = {
    block: PropTypes.object
}



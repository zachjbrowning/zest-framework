import React, { Component } from 'react'
import Section from './Section'
import Header from './Header'
import '../../css/blocks.css'

export default class Page extends Component {
    constructor() {
        super();
        this.state = {
            info : {}
        }
    }
    componentDidMount() {
        const options = {
            method: 'GET',
        }
        fetch('/zestbox/' + this.props.file, options).then(response => response.json()).then(json => this.setState({info: json}))
        
    }
    render() {
        var sec;
        if ('sections' in this.state.info)  {
            sec = this.state.info['sections'].map((item, index) => (
                <Section key={index} section={item}/>
            ))
        }
        if (this.state.info !== {}) {
            return (
                <div id={'page' + this.state.info.title} className={"content " + ('class' in this.state.info ? this.state.info['class'] : '')}>
                    {('title' in this.state.info ? <Header title={this.state.info['title']}/> : '')}
                    {sec}
                </div>
            )
        } else {
            return (
                <div>BRUHH</div>
            )
        }
        
    }
}









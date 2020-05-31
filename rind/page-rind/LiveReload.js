import React, { Component } from 'react'
import Header from '../../src/components/page/Header'
import LiveSegment from './LiveSegment'
import './live.css'
import Section from '../../src/components/page/Section'

export default class LiveReload extends Component {
    constructor() {
        super();
        this.state = {
            sectionCount : 1,
            sections : {},
            object : {
                sections : []
            }
        }
        this.addSection = this.addSection.bind(this);
        this.deleteSection = this.deleteSection.bind(this);
        this.updateSection = this.updateSection.bind(this);
        this.updateHeader = this.updateHeader.bind(this);
        this.generateObject = this.generateObject.bind(this);
        this.copyJSON = this.copyJSON.bind(this);
    }
    copyStringToClipboard(str) {
        // Create new element
        var el = document.createElement('textarea');
        // Set value (string to be copied)
        el.value = str;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);
    }
    copyJSON() {
        let toCopy = JSON.stringify(this.state.object);
        this.copyStringToClipboard(toCopy);
    }
    addSection() {
        this.setState({sections : {...this.state.sections, [this.state.sectionCount] : {}}, sectionCount : this.state.sectionCount + 1})
    }
    deleteSection(id) {
        let temp = this.state.sections;
        delete temp[id];
        this.setState({sections : temp});
    }
    updateSection(id, key, value) {
        let temp = this.state.sections[id];
        temp = {...temp, [key] : value};
        this.setState({sections : {...this.state.sections, [id] : temp}})
    }
    componentDidMount() {
        function toggler(box) {
            box.target.classList.toggle('dev-open');
            let toDrop = box.target.nextElementSibling;
            if (toDrop.style.maxHeight) {
                toDrop.style.maxHeight = toDrop.scrollHeight + 'px';
                setTimeout(() => {toDrop.style.maxHeight = null}, 5);
            } else {
                toDrop.style.maxHeight = toDrop.scrollHeight + 'px';
                setTimeout(() => {toDrop.style.maxHeight = 'none'},305);
            }
        }
        var head = document.getElementById('header');
        head.addEventListener('click', toggler);
    }
    updateHeader(event) {
        event.preventDefault();
        this.setState({object : {...this.state.object, 'title' : event.target.elements.title.value, 'class' : event.target.elements.class.value}})
    }
    generateObject() {
        let temp = []
        Object.keys(this.state.sections).map((key) => {
            temp.push(this.state.sections[key]);
        })
        this.setState({object : {...this.state.object, 'sections' : temp}})
    }
    render() {
        let secs = [];
        console.log("ABOUT TO RENdER", this.state.sections)
        Object.keys(this.state.sections).map((key) => {
            secs.push(<LiveSegment section={this.state.sections[key]} updateSection={this.updateSection} key={key} id={key} delete={this.deleteSection}/>)
        })
        
        return (
            <div className="dev-holder container">
                <Header title='Build your own page!'/>
                <div className="dev-holder">
                    <button id={'header'} type="button" className="header-collapse">
                        Header and metadata
                    </button>
                    <div className="dev-dev container">
                        <form className="dev-el-form" onSubmit={this.updateHeader}>
                            <div className="dev-el-header">
                                <strong>Title</strong>
                            </div>
                            <div className="dev-el-form-form container">
                                <input type="text" name="title" placeholder="title"/>
                                <button className="dev-add-button" type="submit">✓</button>
                            </div>
                            <div className="dev-el-header">
                                <strong>Class</strong>
                            </div>
                            <div className="dev-el-form-form container">
                                <input type="text" name="class" placeholder="class"/>
                                <button className="dev-add-button" type="submit">✓</button>
                            </div>
                        </form>
                    </div>
                </div>
                {secs}
                <div className="dev-holder">
                    <button id="add-section" type="button" className="header-adder" onClick={this.addSection}>
                        Add {Object.keys(this.state.sections).length > 0 ? 'another' : ''} section
                    </button>
                </div>
                <div className="dev-holder">
                    <button id="generate-preview" type="button" className="header-adder" onClick={this.generateObject}> 
                        Generate page
                    </button>
                    <div className="generate-preview">
                        <div className="container">
                            <div className={"preview " + ('class' in this.state.object ? this.state.object.class : '')}>
                                
                                {'title' in this.state.object ? <Header title={this.state.object.title}/> : ''}
                                {this.state.object.sections.map((item, index) => (
                                    <Section key={index} section={item}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dev-holder">
                    <button type="button" className="header-adder copy-it" onClick={this.copyJSON}>
                        Copy json file to clipboard
                    </button>
                </div>
            </div>
        )
    }
}

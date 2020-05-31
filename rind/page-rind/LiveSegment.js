import React, { Component } from 'react'
import Section from '../../src/components/page/Section'
import SubHeader from '../../src/components/page/SubHeader'

export default class LiveSegment extends Component {
    constructor() {
        super();
        this.state = {
            options : {
                header : false,
                id : false,
                class : false,
                layout : false,
                first : false,
                second : false,
                third : false,
            }
        }
        this.updateHeader = this.updateHeader.bind(this);
        this.updateId = this.updateId.bind(this);
        this.updateLayout = this.updateLayout.bind(this);
        this.updateClass = this.updateClass.bind(this);
        this.updateBlock = this.updateBlock.bind(this);
        this.addEl = this.addEl.bind(this);
    }
    
    componentDidMount() {
        var sec = document.getElementById('section-' + this.props.id);
        sec.addEventListener('click', (box) => {
            box.target.classList.toggle('dev-open');
            let toDrop = box.target.nextElementSibling;
            if (toDrop.style.maxHeight) {
                toDrop.style.maxHeight = toDrop.scrollHeight + 'px';
                setTimeout(() => {toDrop.style.maxHeight = null},5);
            } else {
                toDrop.style.maxHeight = toDrop.scrollHeight + 'px';
                setTimeout(() => {toDrop.style.maxHeight = 'none'},305)
            }
        })
    }
    updateHeader(event) {
        event.preventDefault(); 
        this.props.updateSection(this.props.id, 'header-text', [event.target.elements.header.value]);
    }
    updateId(event) {
        event.preventDefault();
        this.props.updateSection(this.props.id, 'id', event.target.elements.id.value)
    }
    updateLayout(event) {
        event.preventDefault();
        this.props.updateSection(this.props.id, 'layout', event.target.elements.layout.value)
    }
    updateClass(event) {
        event.preventDefault();
        this.props.updateSection(this.props.id, 'class', event.target.elements.class.value);
    }
    updateBlock(event, name) {
        event.preventDefault();
        let temp = {
            'header-text' : [event.target.elements.header.value],
            'class' : event.target.elements.class.value,
            'text'  : [event.target.elements.text.value]
        }
        console.log(temp);
        this.props.updateSection(this.props.id, name, temp);
    }
    addEl(event) {
        event.preventDefault();
        this.setState({options : {...this.state.options, [event.target.elements.element.value] : true}});
    }
    render() {
        //DEFINING EXTRA OPTIONS
        let headerText, sectionClass, sectionId, sectionLayout, first, second, third; 

        /*
            HEADER FORM
        */
        if (this.state.options.header) {
            headerText = <form className="dev-el-form" onSubmit={this.updateHeader}>
                <div className="dev-el-header">
                    <strong>Header</strong>
                </div>
                <div className="dev-el-form-form container">
                    <input type="text" name="header" placeholder="header-text"/>
                    <button className="dev-add-button" type="submit">✓</button>
                </div>

            </form>
        }
        /*
            ID FORM
        */
        if (this.state.options.id) {
            sectionId = <form className="dev-el-form" onSubmit={this.updateId}>
                <div className="dev-el-header">
                    <strong>ID</strong>
                </div>
                <div className="dev-el-form-form container">
                    <input type="text" name="id" placeholder="id"/>
                    <button className="dev-add-button" type="submit">✓</button>
                </div>
            </form>
        }
        /*
            LAYOUT FORM
        */
        if (this.state.options.layout) {
            sectionLayout = <form className="dev-el-form" onSubmit={this.updateLayout}>
                <div className="dev-el-header">
                    <strong>Layout</strong>
                </div>
                <div className="dev-el-form-form container">
                    <input type="text" name="layout" placeholder="layout"/>
                    <button className="dev-add-button" type="submit">✓</button>
                </div>
            </form>
        }

       /*
            CLASS FORM
       */
        if (this.state.options.class) {
           sectionClass = <form className="dev-el-form" onSubmit={this.updateClass}>
               <div className="dev-el-header">
                   <strong>Class</strong>
               </div>
               <div className="dev-el-form-form container">
                    <input type="text" name="class" placeholder="class"></input>
                    <button className="dev-add-button" type="submit">✓</button>
               </div>
           </form>
        }
       /*
            FIRST BLOCK FORM
        */
       if (this.state.options.first) {
            first = <form className="dev-el-form" onSubmit={(event) => this.updateBlock(event, 'first')}>
                <div className="dev-el-header">
                    <strong>First Block</strong>
                </div>
                <div className="dev-el-form-form container">
                    <input type="text" name="header" placeholder="header-text"/>
                    <button className="dev-add-button" type="submit">✓</button>
                </div>
                <div className="dev-el-form-form container">
                    <input type="text" name="class" placeholder="class"/>
                    <button className="dev-add-button" type="submit">✓</button>
                </div>
                <div className="dev-el-form-form container">
                    <input type="text" name="text" placeholder="text"/>
                    <button className="dev-add-button" type="submit">✓</button>
                </div>
            </form>
        }
        /*
            SECOND BLOCK FORM
        */
        if (this.state.options.second) {
            second = <form className="dev-el-form" onSubmit={(event) => this.updateBlock(event, 'second')}>
                <div className="dev-el-header">
                    <strong>Second Block</strong>
                </div>
                <div className="dev-el-form-form container">
                    <input type="text" name="header" placeholder="header-text"/>
                    <button className="dev-add-button" type="submit">✓</button>
                </div>
                <div className="dev-el-form-form container">
                    <input type="text" name="class" placeholder="class"/>
                    <button className="dev-add-button" type="submit">✓</button>
                </div>
                <div className="dev-el-form-form container">
                    <input type="text" name="text" placeholder="text"/>
                    <button className="dev-add-button" type="submit">✓</button>
                </div>
            </form>
        }
        /*
            THIRD BLOCK FORM
        */
        if (this.state.options.third) {
            third = <form className="dev-el-form" onSubmit={(event) => this.updateBlock(event, 'third')}>
                <div className="dev-el-header">
                    <strong>Third Block</strong>
                </div>
                <div className="dev-el-form-form container">
                    <input type="text" name="header" placeholder="header-text"/>
                    <button className="dev-add-button" type="submit">✓</button>
                </div>
                <div className="dev-el-form-form container">
                    <input type="text" name="class" placeholder="class"/>
                    <button className="dev-add-button" type="submit">✓</button>
                </div>
                <div className="dev-el-form-form container">
                    <input type="text" name="text" placeholder="text"/>
                    <button className="dev-add-button" type="submit">✓</button>
                </div>
            </form>
        }
        /*
            ADDABLE ELEMENTS FORM
        */
        let addables = [];
        Object.keys(this.state.options).map((key,index) => {
            if (!this.state.options[key]) {
                addables.push(<option name={key} key={index}>{key}</option>)
            }
        });
        let addform;
        if (addables.length !== 0) {
            addform = <form className="dev-add-form" onSubmit={this.addEl}>
                <select name="element">
                    <option defaultValue hidden>Add an element</option>
                    {addables}
                </select>
                <button className="dev-add-button" type="submit">✓</button>
            </form>
        }


        return (
            <div className="dev-holder">
                <button id={'section-' + this.props.id} type="button" className="header-collapse">
                    Section
                </button>
                <div className="dev-dev container">
                    <div className="dev-options">
                        {headerText}
                        {sectionId}
                        {sectionClass}
                        {sectionLayout}
                        {first}
                        {second}
                        {third}
                        {addform}
                    </div>
                    <SubHeader header={['Preview']} style={{'color' : 'white', 'paddingBottom' : '0px'}}/>
                    <div className="preview">
                        
                        <Section section={this.props.section}/>
                    </div>
                    <div className="dev-el-del" onClick={() => this.props.delete(this.props.id)}>
                        Delete section
                    </div>
                </div>
            </div>
        )
    }
}

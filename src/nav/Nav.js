import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/nav.css'
import NavItem from './NavItem'


export default class Nav extends Component {
    toggleShow() {
        var row = document.getElementById('nav-row')
        if (row.style.height) {
            //Closing
            row.style.transitionDuration = '0ms';
            row.style.height = row.scrollHeight + 'px';
            setTimeout(() => {row.style.transitionDuration = null; row.style.height = null}, 10);
        } else {
            row.style.height = row.scrollHeight + 'px';
            setTimeout(() => {row.style.height = '100%'}, 200);
        }
    }
    navigate() {
        document.documentElement.scrollTo(0,0);
        var row = document.getElementById('nav-row')
        if (row.style.height) {
            //Closing
            row.style.transitionDuration = '0ms';
            row.style.height = row.scrollHeight + 'px';
            setTimeout(() => {row.style.transitionDuration = null; row.style.height = null}, 10);
        } else if (window.innerWidth <= 600) {
            //NEED THIS TO OCCUR ONLY IF WIDE ENOUGH
            row.style.height = row.scrollHeight + 'px';
            setTimeout(() => {row.style.height = '100%'}, 200);
        }
    }
    render() {
        let brand;
        if ('img' in this.props.brand) {
            brand = <div className="nav-logo">
                <img src={'/public/' + this.props.brand['img']}/>
            </div>
        }
        return (
            <header>
                <nav className="fixed-nav navbar">
                    <div id="nav-container" className="container">
                        <Link to='/' onClick={this.navigate} className="mr-auto navbrand" style={('style' in this.props.brand ? this.props.brand['style'] : {})}>
                            {brand}
                            <span className="nav-title">{('title' in this.props.brand ? this.props.brand['title'] : '')}</span>
                        </Link>
                        <button onClick={this.toggleShow} className="nav-toggler" type="button">
                            <svg width='30' height='30' viewBox='0 0 30 30'><path className="nav-burger"d='M4 7h22M4 15h22M4 23h22'/></svg>
                        </button>
                        <div id="nav-row">
                            <ul className="nav-list">
                                {this.props.paths.map((item, index) => (
                                    <NavItem key={index} navigate={this.navigate} info={item}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

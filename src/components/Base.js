import React, {Component} from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import SwitchBoard from './SwitchBoard'
const meta = require('../../zestbox/main.json')



export default class Base extends Component {
    
    render() {
        if ('colors' in meta) {
            if ('primary' in meta['colors']) {
                document.documentElement.style.setProperty('--primary',meta['colors']['primary'])
                document.documentElement.style.setProperty('--primary-fade',meta['colors']['primary'] + 'cc')
            }
            if ('secondary' in meta['colors']) {
                document.documentElement.style.setProperty('--secondary',meta['colors']['secondary'])
                document.documentElement.style.setProperty('--secondary-fade',meta['colors']['secondary'] + 'cc')
            }
            if ('tertiary' in meta['colors']) {
                document.documentElement.style.setProperty('--tertiary',meta['colors']['tertiary'])
                document.documentElement.style.setProperty('--tertiary-fade',meta['colors']['tertiary'] + 'cc')
            }
            if ('quaternary' in meta['colors']) {
                document.documentElement.style.setProperty('--quaternary',meta['colors']['quaternary'])
                document.documentElement.style.setProperty('--quaternary-fade',meta['colors']['quaternary'] + 'cc')
            }
            if ('backdrop' in meta['colors']) {
                document.documentElement.style.setProperty('--backdrop',meta['colors']['backdrop'])
                document.documentElement.style.setProperty('--backdrop-fade',meta['colors']['backdrop'] + 'cc')
            }
        }
        return (
            <div>
                <Nav brand={meta['brand']} paths={meta['paths']}/>
                <main>
                    <SwitchBoard paths={meta['paths']}/>
                </main>
                <Footer footer={meta['footer']}/>
            </div>
        )
    }
}



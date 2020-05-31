import React from 'react'
import {Route} from 'react-router-dom'
import LiveReload from './page-rind/LiveReload'
/*
To add new pages:
- import your new Component above
- include extra <Route exact path='/path/i/want/to/catch' render={() => <Component/>} as another element in the array below
- done!
*/
export default function PageSwitchboard() {
    return [
        <Route key='live' exact path='/live-reload' component={LiveReload}/>
    ]
}

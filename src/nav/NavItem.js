import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'

export default function NavItem(props) {
    let item;
    if ('subpaths' in props.info) {
        item = <div className="dropdown">
            <Switch>
                <Route path={'/' + props.info['pathname']} render={() => (
                    <div className={'nav-link ' + (props.info['pathname'] === '' && window.location.pathname !== '/' ? '' : 'active')}>{props.info['name']}</div>
                )}/>
                <Route render={() => (
                    <div className='nav-link'>{props.info['name']}</div>
                )}/>
            
            </Switch>
            <ul className="dropdown-menu">
                {props.info['subpaths'].map((out, index) => <li key={index} className="nav-item">
                    <Switch>
                        <Route path={'/' + props.info['pathname'] + '/' + out['pathname']} render={() => (
                            <Link onClick={props.navigate} className='nav-link active' to={"/" + props.info['pathname'] + "/" + out[['pathname']]}>{out['name']}</Link>
                        )}/>
                        <Route render={() => (
                            <Link onClick={props.navigate} className='nav-link' to={"/" + props.info['pathname'] + "/" + out['pathname']}>{out['name']}</Link>
                        )}/>
                    </Switch>

                </li>)}
            </ul>
        </div>
    } else {
        item = <Switch>
                <Route path={'/' + props.info['pathname']} render={() => (
                    <Link onClick={props.navigate} to={'/' + props.info['pathname']} className={'nav-link ' + (props.info['pathname'] === 'zest' && window.location.pathname !== '/zest' ? '' : 'active')}>{props.info['name']}</Link>
                )}/>
                <Route render={() => (
                    <Link onClick={props.navigate} to={'/' + props.info['pathname']} className='nav-link'>{props.info['name']}</Link>
                )}/>
            
            </Switch>
    }
    return (
        <div className="nav-item">
            {item}
        </div>
    )
}

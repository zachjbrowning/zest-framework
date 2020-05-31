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
                {props.info['subpaths'].map((out, index) => {
                    if ('subpaths' in out) {
                        return (
                            <div key={index} className="nav-item">
                                <div className="dropdown-dropdown">
                                    <Switch>
                                        <Route path={'/' + props.info['pathname'] + '/' + out['pathname']} render={() => (
                                            <div className={'nav-link active'}>{out['name']}</div>
                                        )}/>
                                        <Route render={() => (
                                            <div className='nav-link'>{out['name']}</div>
                                        )}/>
                                    
                                    </Switch>
                                    <ul className="dropdown-dropdown-menu">
                                        {out['subpaths'].map((outout, indexindex) => (
                                            <li key={indexindex} className="nav-item">
                                                <Switch>
                                                    <Route path={'/' + props.info['pathname'] + '/' + out['pathname'] + '/' + outout['pathname']} render={() => (
                                                        <Link onClick={props.navigate} className="nav-link active" to={'/' + props.info['pathname'] + '/' + out['pathname'] + '/' + outout['pathname']}>{outout['name']}</Link>
                                                    )}/>
                                                    <Route render={() => (
                                                        <Link onClick={props.navigate} className="nav-link" to={'/' + props.info['pathname'] + '/' + out['pathname'] + '/' + outout['pathname']}>{outout['name']}</Link>
                                                    )}/>
                                                </Switch>
                                            </li>

                                        ))}
                                    </ul>
                                </div>
                            </div>
                            

                        )

                    } else {
                        return <li key={index} className="nav-item">
                            <Switch>
                                <Route path={'/' + props.info['pathname'] + '/' + out['pathname']} render={() => (
                                    <Link onClick={props.navigate} className='nav-link active' to={"/" + props.info['pathname'] + "/" + out[['pathname']]}>{out['name']}</Link>
                                )}/>
                                <Route render={() => (
                                    <Link onClick={props.navigate} className='nav-link' to={"/" + props.info['pathname'] + "/" + out['pathname']}>{out['name']}</Link>
                                )}/>
                            </Switch>

                        </li>
                    }
                
                })}
            </ul>
        </div>
    } else {
        item = <Switch>
                <Route path={'/' + props.info['pathname']} render={() => (
                    <Link onClick={props.navigate} to={'/' + props.info['pathname']} className={'nav-link ' + (props.info['pathname'] === '' && window.location.pathname !== '/' ? '' : 'active')}>{props.info['name']}</Link>
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

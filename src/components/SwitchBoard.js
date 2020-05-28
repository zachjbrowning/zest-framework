import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Page from './page/Page'



export default function SwitchBoard(props) {
    //NEED TO GO THROUGH each path and it's subpaths
    var mapper = {}
    props.paths.map((item) => {
        if ('filename' in item) {
            mapper['/' + item['pathname']] = item['filename'];
        }
        for (var k in item['subpaths']) {
            mapper['/' + item['pathname'] + '/' + item['subpaths'][k]['pathname']] = item['subpaths'][k]['filename']; 
        }
    })
    var order = []
    Object.keys(mapper).map((key) => {
        if (key === '/') {
        }
        order.push(key);
    })
    return (
        <Switch>
            
            {order.map((path, index) => {
                if (path === '/') {
                    return (<Route key={index} exact path={path} render={() => <Page file={mapper[path]}/>}/>)
                } else {
                    return (<Route key={index} path={path} render={() => <Page file={mapper[path]}/>}/>)
                }   
            })}


        </Switch>
    )
}

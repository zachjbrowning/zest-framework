import React from 'react'
import ZJBlogo from './ZJBlogo'

export default function Base() {
    return (
        <div className="base-frame">
            <div className="title-frame">
                <strong>Happy Building!!</strong>
            </div>
            <div className="logo-holder">
                <ZJBlogo/>
            </div>
        </div>
    )
}

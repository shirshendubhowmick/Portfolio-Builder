import React from 'react';
import classes from './Badge.css'

const badge = (props) => {
    return (
        <div className={classes.badge + " " + props.className}>{props.children}</div>
    )
}

export default badge;
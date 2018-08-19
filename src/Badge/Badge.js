import React from 'react';

const badge = (props) => {
    return (
        <div className={"badge " + props.className}>{props.children}</div>
    )
}

export default badge;
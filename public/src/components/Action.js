import React from 'react';


const Action = (props) => {
    return (
        <div>
            <button className="big-button" onClick={props.pickOption} disabled={!props.hasOptions}>What should i buy</button>
        </div>

    )
}

export default Action;


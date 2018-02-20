import React from 'react';
import Option from './Option'


const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header_title">Your Cryptos</h3>
                <button onClick={props.deleteOptions} className=" button button--link">Remove All</button>
            </div>
            <div className="widget-message">
                {props.options.length === 0 && <p>Please add some crypto to get started</p>}
            </div>

            <ol >
                <Option deleteOption={props.deleteOption} options={props.options} />
            </ol>
            <hr />
        </div>
    )
}


export default Options;
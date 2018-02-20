import React from 'react';

export default class Option extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.options.map((option,index) => {
                        return (
                            <li className="option" key={option}><p className="option__text">{option}</p>
                                <button className="button button--link"
                                    onClick={(e) => this.props.deleteOption(option)}
                                >Remove</button>
                            </li>
                        )
                    })
                }
            </div>

        )
    }
}
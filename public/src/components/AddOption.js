import React from 'react';



export default class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        };

    }


    onFormSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value;
        const error = this.props.AddOption(option);
        this.setState(() => ({ error: error }))

        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option__error">{this.state.error}</p>}
                < form className="add-option__form" onSubmit={this.onFormSubmit}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add New Crypto</button>
                </form >
            </div>
        )
    }
}

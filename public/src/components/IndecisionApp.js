import React from 'react';

import AddOption from './AddOption'
// import Option from './components/Option';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal'


export default class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.AddOption = this.AddOption.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.deleteOption = this.deleteOption.bind(this);
        this.confirmSelectedOption = this.confirmSelectedOption.bind(this);
        this.state = {
            options:this.props.options,
            selectedOption: undefined
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({
                    options: this.props.options
                }))
            }

        } catch (e) {

        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }

    }

    deleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }));

    }

    pickOption() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        this.setState(() => ({ selectedOption: this.state.options[randomNum] }))
    }

    confirmSelectedOption() {
        this.setState(() => ({ selectedOption: undefined }))
    }

    deleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    AddOption(option) {
        if (!option) {
            return 'Please enter some cryptos'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Crypto alredy excsit'
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
    }


    render() {
        const title = 'Crypto Luck ';
        const subtitle = 'Let the computer make the hard choise';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} pickOption={this.pickOption} />
                    <div className="widget-body">
                        <Options options={this.state.options} deleteOption={this.deleteOption} deleteOptions={this.deleteOptions} />
                        <AddOption AddOption={this.AddOption} />
                    </div>

                </div>
                <OptionModal confirmSelected={this.confirmSelectedOption}
                    selectedOption={this.state.selectedOption}
                />
            </div>

        )
    }

}

IndecisionApp.defaultProps = {
    options: []
}
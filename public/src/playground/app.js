

class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.AddOption = this.AddOption.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.deleteOptions = this.deleteOption.bind(this);
        this.deleteOption = this.deleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({
                    options: options
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
        alert(this.state.options[randomNum])

    }

    deleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    AddOption(option) {
        if (!option) {
            return 'Please enter some options'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option alredy excsit'
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
    }


    render() {
        const title = 'Indecision App ';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} pickOption={this.pickOption} />
                <Options options={this.state.options} deleteOptions={this.deleteOptions}
                    deleteOption={this.deleteOption} />
                <AddOption AddOption={this.AddOption} />
            </div>

        )
    }

}

IndecisionApp.defaultProps = {
    options: []
}


const Action = (props) => {
    return (
        <div>
            <button onClick={props.pickOption} disabled={!props.hasOptions}>What should i do</button>
        </div>

    )
}

const Options = (props) => {
    return (
        <div>
            <ol>
                <Option deleteOption={props.deleteOption} options={props.options} />
            </ol>
            <button onClick={props.deleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add some options to get started</p>}
            <hr />
        </div>
    )
}



class Option extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => {
                        return (
                            <li key={option}>{option}
                                <button
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

class AddOption extends React.Component {
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
                {this.state.error && <p>{this.state.error}</p>}
                < form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form >
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp options={['Learn React', 'Learn Angular', 'Watch Game Of Thrones']} />, document.getElementById('app'))


// class Counter extends React.Component {
//     constructor(props) {
//         super(props)
//         this.increaseCounter = this.increaseCounter.bind(this);
//         this.decreaseCounter = this.decreaseCounter.bind(this);
//         this.resetCounter = this.resetCounter.bind(this);
//         this.state = {
//             count: 0
//         }
//     }

//     increaseCounter() {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count + 1
//             }
//         });
//     }

//     decreaseCounter() {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count - 1
//             }
//         });
//     }

//     resetCounter() {
//         this.setState(() => {
//             return {
//                 count: 0
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Count:{this.state.count}</h1>
//                 <button onClick={this.increaseCounter}>+1</button>
//                 <button onClick={this.decreaseCounter}>-1</button>
//                 <button onClick={this.resetCounter}>Reset</button>
//             </div>
//         )
//     }

// }





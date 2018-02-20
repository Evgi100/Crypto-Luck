
var appRoot = document.getElementById('app')

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    details: 'Some Details to view',
    options: []
}



const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option)
        renderView();
    }
}

const removeAll = () => {
    app.options = [];
    renderView();
}

const renderOptions = () => {
    return app.options.map((option) => {
        return (
            <li key={option}>{option}</li>
        )
    })
}

const randomOption = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    alert(app.options[randomNum])
}




const renderView = () => {
    const template = (
        < div >
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0 ? 'Here are your options:' : 'You have no options'}</p>
            <ol>
                {renderOptions()}
            </ol>
            <button disabled={app.options.length === 0} onClick={randomOption}>What should i do ?</button>
            <button onClick={removeAll}>Remove all</button>
            <hr />
            < form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form >
      
        </div >
    )

    ReactDOM.render(template, appRoot);
};


renderView();




console.log("App.js is running!")

// JSX - Javascript XML

const app = {
	title: "Indecision App",
	subtitle: "A very good app",
	options: [],
}

const appRoot = document.getElementById("app")

const numbers = [55, 101, 2014]

const onFormSubmit = (e) => {
	e.preventDefault()

	const option = e.target.elements.option.value //gets value from input with name "option"

	if (option) {
		app.options.push(option)
		e.target.elements.option.value = "" // reset value
		renderApp()
	}
}

const removeOptions = () => {
	app.options = []
	renderApp()
}

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length)
	const option = app.options[randomNum]

	alert(option)
}

const renderApp = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			{app.options.length > 0 ? (
				<p>Here are your options:</p>
			) : (
				<p>No options</p>
			)}
			<button disabled={app.options.length === 0} onClick={removeOptions}>
				Remove all
			</button>
			<button onClick={onMakeDecision}>What should I do?</button>
			<ol>
				{app.options.map((option) => {
					return <li key={option}>{option}</li>
				})}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type='text' name='option' />
				<button>Add option</button>
			</form>
		</div>
	)
	ReactDOM.render(template, appRoot)
}

renderApp()

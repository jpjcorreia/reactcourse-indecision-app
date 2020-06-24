class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props)
		this.onClickShowDetails = this.onClickShowDetails.bind(this)
		this.state = { showDetails: false }
	}

	onClickShowDetails() {
		this.setState((prevState) => {
			return { showDetails: !prevState.showDetails }
		})
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.onClickShowDetails}>
					{this.state.showDetails ? "Hide details" : "Show details"}
				</button>
				{this.state.showDetails && <p>Here are some details</p>}
			</div>
		)
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))

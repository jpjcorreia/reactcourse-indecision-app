import React from "react";

export default class AddOption extends React.Component {
	state = {
		error: undefined,
	};

	handleAddOption = (e) => {
		// class property
		e.preventDefault();

		const option = e.target.elements.option.value.trim(); //gets value from input with name "option"

		const error = this.props.handleAddOption(option);

		this.setState(() => ({ error })); // short hand error: error

		if (!error) {
			e.target.elements.option.value = "";
		}
	};

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add option</button>
				</form>
			</div>
		);
	}
}

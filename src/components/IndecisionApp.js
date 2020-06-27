import React from "react";
import AddOption from "./AddOption.js";
import Options from "./Options.js";
import Action from "./Action.js";
import Header from "./Header.js";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  // class properties

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleClearOption = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState(() => ({
      selectedOption: option,
    }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Enter a valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This item already exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
  };

  // class properties - end

  // events

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      // save only if options changed
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearOption={this.handleClearOption}
          />
        </div>
      </div>
    );
  }
}

export default IndecisionApp;

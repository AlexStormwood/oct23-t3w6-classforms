import React from "react";
import SocialCardForm from "./SocialCardForm";
import SocialCardDisplay from "./SocialCardDisplay";

export default class SocialCardParent extends React.Component {
	constructor(){
		super();

		this.state = {
			currentlyEditing: true,
			content: "Default content",
			imageUrl: ""
			
		}
	}

	updateStateProperty = (targetStateKey, newStateValue) => {
		console.log(targetStateKey, newStateValue);
		this.setState({
			[targetStateKey]: newStateValue, // <-- Finds state key as a variable and updates that
			// targetStateKey: newStateValue <-- This creates a key in state called "targetStateKey"
		})
	}

	toggleEditMode = () => {
		this.setState({currentlyEditing: !this.state.currentlyEditing});
	}



	render(){
		if (this.state.currentlyEditing){
			return <SocialCardForm toggleEditMode={this.toggleEditMode} setParentState={this.updateStateProperty} content={this.state.content} imageUrl={this.state.imageUrl}  />
		} else {
			return <SocialCardDisplay toggleEditMode={this.toggleEditMode} content={this.state.content} imageUrl={this.state.imageUrl}  />
		}
	}
}


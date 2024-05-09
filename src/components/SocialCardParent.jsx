import React from "react";
import SocialCardForm from "./SocialCardForm";
import SocialCardDisplay from "./SocialCardDisplay";
import { faker } from "@faker-js/faker";

export default class SocialCardParent extends React.Component {
	constructor(){
		super();

		this.state = {
			currentlyEditing: false,
			content: "Default content",
			imageUrl: faker.image.urlPicsumPhotos(),
			hoverImageUrl: faker.image.urlPicsumPhotos()
			
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
			return <SocialCardForm toggleEditMode={this.toggleEditMode} setParentState={this.updateStateProperty} content={this.state.content} imageUrl={this.state.imageUrl}  hoverImageUrl={this.state.hoverImageUrl} />
		} else {
			return <SocialCardDisplay toggleEditMode={this.toggleEditMode} content={this.state.content} imageUrl={this.state.imageUrl} hoverImageUrl={this.state.hoverImageUrl}  />
		}
	}
}


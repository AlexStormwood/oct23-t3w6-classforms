import React from "react";
import SocialCardForm from "./SocialCardForm";
import SocialCardDisplay from "./SocialCardDisplay";

export default class SocialCardParent extends React.Component {
	constructor(){
		super();

		this.state = {
			currentlyEditing: false,
			content: "Default content",
			imageUrl: ""
		}
	}


	render(){
		if (this.state.currentlyEditing){
			return <SocialCardForm content={this.state.content} imageUrl={this.state.imageUrl} toggleEditMode="" />
		} else {
			return <SocialCardDisplay content={this.state.content} imageUrl={this.state.imageUrl} toggleEditMode="" />
		}
	}
}


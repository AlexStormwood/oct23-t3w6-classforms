import React from "react";

export default class SocialCardForm extends React.Component{
	constructor(){
		super();

		this.state = {
			content: "Default post content",
			imageUrl: ""
		}
	}

	render(){
		return (
			<section className="socialCardForm">
				<label htmlFor="postContent">Post content:</label>
				<input 
					type="text" 
					name="postContent" 
					className="postContent" 
					value={this.state.content} 
					onChange={(event) => {this.setState({content: event.target.value})}}
				/>
				<button onClick={this.props.toggleEditMode}>Toggle Edit Mode</button>
			</section>
		)
	}
}
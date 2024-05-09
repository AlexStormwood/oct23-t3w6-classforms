import React from "react";

export default class SocialCardForm extends React.Component{



	

	render(){
		return (
			<section className="socialCardForm">
				<label htmlFor="postContent">Post content:</label>
				<input 
					type="text" 
					name="content" 
					className="postContent" 
					value={this.props.content} 
					onChange={(event) => {
						console.log(event.target.name, event.target.value);
						this.props.setParentState(event.target.name, event.target.value);
					}}
				/>
				<button onClick={this.props.toggleEditMode}>Toggle Edit Mode</button>
			</section>
		)
	}
}
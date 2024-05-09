import React from "react"


export default class SocialCardDisplay extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			// activeImageUrl: props has imageUrl ? props.imageUrl : some default image URL 
			activeImageUrl: this.props.imageUrl ? this.props.imageUrl : ""
		}
	}

	handleOnMouseEnter = () => {
		this.setState({activeImageUrl: this.props.hoverImageUrl});
	}

	handleOnMouseLeave = () => {
		this.setState({activeImageUrl: this.props.imageUrl});
	}

	render(){
		return <div>
		<p>{this.props.content}</p>
		<img onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave} src={this.state.activeImageUrl} alt="Matching visual content for social media content post." />
		<button onClick={this.props.toggleEditMode}>Edit post</button>
		</div>
	}
}
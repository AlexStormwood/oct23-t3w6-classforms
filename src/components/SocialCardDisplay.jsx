

export default function SocialCardDisplay(props){

	return <div>
		<p>{props.content}</p>
		{props.imageUrl && <img src={props.imageUrl} alt="Matching visual content for social media content post." />}
		<button onClick={props.toggleEditMode}>Edit post</button>
	</div>
}
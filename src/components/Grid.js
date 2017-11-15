import React, { Component } from 'react';
import { connect } from 'react-redux';

class Grid extends Component {

	render() {

		return(

			<div>
				<div className="GridPostItem">
					<img src={this.props.post.data.thumbnail} alt={this.props.post.data.thumbnail}/>
				</div>
			</div>

		);
	}
}


// <p className="OverlayTitle">{this.props.post.data.title}</p>

function mapStateToProps(state) {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(Grid);
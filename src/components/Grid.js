import React, { Component } from 'react';
import { connect } from 'react-redux';

class Grid extends Component {

	render() {

		return(

			<div>
				<div className="GridPostItem">
					<img src={this.props.post.thumbnail} alt={this.props.post.thumbnail}/>
				</div>
			</div>

		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(Grid);
import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {

	render() {

		return(
			<article>
				<section>
					<div className="PostItem">
						<img src={this.props.post.data.thumbnail} alt={this.props.post.data.thumbnail}/>
						<h4 className="PostTitle">{this.props.post.data.title}</h4>
					</div>
				</section>
			</article>
		);
	}

	
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(List);
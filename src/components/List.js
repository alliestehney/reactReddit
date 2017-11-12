import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {

	render() {

		return(
			<article>
				<section>
					<div className="PostItem">
						<img src={this.props.post.thumbnail} alt={this.props.post.thumbnail}/>
						<h4 className="PostTitle">{this.props.post.title}</h4>
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
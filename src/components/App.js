import React, { Component } from 'react';
import List from "./List";
import Grid from "./Grid";
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

class App extends Component {
  render() {

  	const listPosts = this.props.posts.map((post) => (
		<div className="Post" key={post.permalink}>
			<List post={post} />
		</div>
	));

	const gridPosts = this.props.posts.map( (post) => (
		<div className="Post" key={post.permalink}>
			<Grid post={post} />
		</div>
	));

    return (
    	<Router>
		      <div className="App">
		      		<nav className="Top">
				      	<h1>Awww Reddit Posts</h1>
				      	<div className="ListLink">
				      		<Link to="/list">List View</Link>
				      	</div>
				      	<div className="GridLink">
				      		<Link to="/grid" className="GridLink">Grid View</Link>
				      	</div>
		    		</nav>

			      <Switch>
			      		<Route path="/list" render={() => (
			      			<div>
				      			{listPosts}
				      		</div>
			      		)}/>

			      		<Route path="/grid" render={() => (
			      			<div className="Container">
			      				{gridPosts}
			      			</div>
			      		)}/>
			      </Switch>
			 </div>
		</Router>
    );
  }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(App);

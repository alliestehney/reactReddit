import $ from 'jquery-ajax';

export function fetchPosts() {
	console.log("test");

	return function(dispatch) {
		dispatch(requestPosts());
		$.get("https://www.reddit.com/r/aww.json", function(data) {
			// get data we need & want
			// const title = data.children.data.title;
			// console.log(title);

			const posts = data.data.children;
			console.log(posts);
			dispatch(receivePosts(posts));
		});
	}
}

function requestPosts() {
	return {
		type: "REQUEST_STARSHIPS"
	}
}

function receivePosts(posts) {
	return {
		type: "RECEIVE_POSTS",
		posts
	}
}
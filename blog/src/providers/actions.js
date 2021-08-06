import jsonPlaceHolder from '../services/api';
import _ from 'lodash';

// fetch posts and users
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts())
	
	// const userIds = _.uniq(_.map(getState().props, 'userId'));
	// userIds.forEach(id => dispatch(fetchUser(id)));

	_.chain(getState().posts)
		.map('userId')
		.uniq()
		.forEach(id => dispatch(fetchUser(id)))
		.value();
}

// fetch all posts
export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceHolder.get('/posts');
	dispatch({ type: 'FETCH_POSTS', playload: response.data });
};

// fetch user by id
export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceHolder.get(`/users/${id}`);
	dispatch({ type: 'FETCH_USER', playload: response.data });
};
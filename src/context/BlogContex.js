import createDataContex from './createDataContex';

const state = {posts: []};
import jsonServer from '../api/jsonServer';

const reducer = (state, action) => {
  switch (action.type) {
    case 'EDIT_POST':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post,
        ),
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    case 'GET_POSTS': 
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state;
  }
};

const getBlogPost = dispatch => {
    return async () => {
     const response =  await jsonServer.get('/posts')
     dispatch({ type: 'GET_POSTS', payload: response.data})
    }
}

const addBlogPost = () => {
  return async (payload, callback) => {
    await jsonServer.post('/posts', payload)
    callback();
  };
};

const deleteBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`/posts/${id}`)
    dispatch({type: 'DELETE_POST', payload: id});
  }
};

const editBlogPost = dispatch => {
  return async (payload, callback) => {
    await jsonServer.put(`/posts/${payload.id}`, payload)
    dispatch({type: 'EDIT_POST', payload});
    callback();
  };
};

export const {Context, Provider} = createDataContex(
  reducer,
  {
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
    getBlogPost
  },
  state,
);

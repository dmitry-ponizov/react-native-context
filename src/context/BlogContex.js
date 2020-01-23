import createDataContex from './createDataContex';

const state = {posts: []}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {...state, 
        posts: [
        ...state.posts,
        {id: Math.floor(Math.random() * 99999), title: `Blog post#${state.posts.length +1}`}
      ]};
    case 'EDIT_POST':

    case 'DELETE_POST':
    default:
      return state;
  }
};


const addBlogPost = (dispatch) => {
  return () =>  dispatch({type: 'ADD_POST'})
}

export const { Context, Provider } = createDataContex(reducer, {addBlogPost}, state)


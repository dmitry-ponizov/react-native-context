import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContex';
import Form from '../components/Form';

const EditScreen = ({navigation}) => {
  const {state, editBlogPost} = useContext(Context);
  const id = navigation.getParam('id');
  const post = state.posts.find(post => post.id === id);

  return (
    <Form
      initTitle={post.title}
      initContent={post.content}
      onSubmit={payload =>
        editBlogPost({id, ...payload}, () => navigation.pop())
      }
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;

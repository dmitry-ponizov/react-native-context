import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContex';
import Form from '../components/Form';

const CreateScreen = ({navigation}) => {
  const {addBlogPost} = useContext(Context);
  return (
    <Form
      onSubmit={payload =>
        addBlogPost(payload, () => navigation.navigate('Index'))
      }
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;

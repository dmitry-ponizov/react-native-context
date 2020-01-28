import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const Form = ({navigation, initTitle, initContent, onSubmit}) => {
  const [title, setTitle] = useState(initTitle);
  const [content, setContent] = useState(initContent);
  return (
    <View>
      <Text style={styles.label}>Enter title</Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter content</Text>
      <TextInput
        value={content}
        onChangeText={text => setContent(text)}
        style={styles.input}
      />
      <Button
        title="Save blog post"
        onPress={() => onSubmit({title, content})}
      />
    </View>
  );
};

Form.defaultProps = {
  initTitle: '',
  initContent: '',
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
});

export default Form;

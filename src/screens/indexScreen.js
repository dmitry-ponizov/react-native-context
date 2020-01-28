import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../context/BlogContex';
import Icon from 'react-native-vector-icons/Feather';

const IndexScreen = ({navigation}) => {
  Icon.loadFont();
  const {state, getBlogPost, deleteBlogPost} = useContext(Context);
  useEffect(() => {
    getBlogPost()
    const listener = navigation.addListener('didFocus', () => {
      getBlogPost()
    })
    return () => {
      listener.remove()
    }
  }, [])
  return (
    <View>
      <FlatList
        data={state.posts}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Show', {id: item.id})}>
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} - {item.content}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Icon name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Icon name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;

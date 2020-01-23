import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContex'
import Icon from 'react-native-vector-icons/Feather'

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context);
    return(
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList 
                data={state.posts} 
                keyExtractor={(item) => item.title}
                renderItem={({item}) => <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => console.log(item.id)}>
                            <Icon name="trash" style={styles.icon} />
                        </TouchableOpacity>
                    </View>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default IndexScreen;
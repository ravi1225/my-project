import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Alert, Checkbox, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from './src/components/Colors';

export default function Todo() {

    const [todo, setTodo] = useState([
         {
            text: 'abc',  key: 1, check:false
         },
         {
            text: 'xyz',  key: 2, check:false
         },


    ]);

    const addTodos = (text) => {
        if(text.trim().length >0)
        {
            setTodo((prevValue) => {
                return[
                    ...prevValue,
                    {text : text.trim(), key: Math.random().toString(), check: 'false'}
                ]
            })
        }
        else {
            Alert.alert('error!', 'List can\'t\ be empty', [
                { text: Ok, onPress: () => console.log('Alert Closed')}
            ])
        }
    }

    return (
        <>       
            <View style={styles.firstView}>
                             
                <FlatList   
                        data={ todo }
                        renderItem = {( { item }) => (
                            <View style={styles.flatlistView}>
                                <TouchableOpacity>
                                    <Icon name="checkbox-blank-circle-outline" size={30} color={Colors.CornflowerBlue} />
                                    <Icon name="checkbox-marked-circle-outline" size={30} color={Colors.CornflowerBlue} />
                                </TouchableOpacity>
                                <Text style={styles.flatlistText}> {item.text} </Text>
                            </View>
                        )}          
                />        
            </View>
        </>        
    );
}

const styles = StyleSheet.create({
    firstView: {
        flexDirection:'row',
        justifyContent: 'space-around',
    },

    flatlistView: {
        flexDirection:'row',
        marginLeft: 10,
        marginRight: 10, 
    },

    flatlistText:{
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 0.5,
        fontSize: 25,
        borderBottomWidth: 0.5,
        minWidth: 1790,
        borderBottomColor: Colors.lightgray,
    },
});

import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddTodo (props, { addTodos }){

    const [text, setText] = useState('');
    const [modalVal, setModalVal] = useState(false);

    const textInput= (val) =>{
        setText(val);
    }

    return(
        <View>
        <Modal 
            visible={props.modalVal}
            animationType= 'fade' 
            transparent={true}
        >
            <View style={styles.externalView}>
                <View style={styles.internalView}>
                <Text style={styles.headerText}> Add Todo </Text>
                <TextInput
                    style={styles.inputBox}
                    value={text}
                    onChangeText={textInput}
                />
                <View style={styles.thirdView}>
                    <TouchableOpacity 
                        onPress={(props) => {
                            setModalVal(props.modalVal);
                        }}
                    >
                        <Text style={styles.textStyle}>Cancel</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            setText('')
                            addTodos(text)
                        }}
                    >
                        <Text style={styles.textStyle}>Done</Text>
                    </TouchableOpacity>
                </View>  
                </View>
            </View>
        </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    externalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    internalView: {
        borderRadius: 15,
        paddingRight: 5,
        borderWidth: 1,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingTop: 15,
        paddingRight: 10,
        minWidth: 350,
        borderColor: "lightgray",
        
    },

    inputBox: {
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 10,
        height: 150,
        minWidth: 350,
    },

    thirdView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
    },

    textStyle: {
        color: 'blue',
        fontSize: 20,
    }
  });
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TextInputComponent, TouchableOpacity, View } from 'react-native';

export default function AddTodo (){

    const [text, setText] = useState('');

    const textInput= (e) =>{
        setText(e.target.value);
    }

    return(
        <>
            <Modal 
                visible={true}
                animationType={}
            >
                <View>
                    <View>
                    <Text> Add Todo </Text>
                    <TextInput
                        placeholder="Add whatever you want to add"
                        onChangeText= {textInput}
                        value={text}
                    />
                    <TouchableOpacity>
                        <Text>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text>Done</Text>
                    </TouchableOpacity>
                    
                    </View>

                </View>
            </Modal>
        </>
    )
}


const styles = StyleSheet.create({
    external_View: {
      flex: 1,
      backgroundColor: '#fff',
      transparent: 'true'
      
      
    },
  });
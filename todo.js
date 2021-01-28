import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Modal, TouchableOpacity } from 'react-native';

export default function Todo() {

    // const Abc =[
    //     {
    //         text: 'abc', key: 1, 
    //     },
    //     {
    //         text: 'xyz', key: 2,
    //     }
    //  ];

    return (
        // <View style={styles.first}>
        //    <FlatList   
        //         data={ Abc }
        //         renderItem = {( { item }) => (
        //             <Text> {item.Abc} </Text>
        //         )}          
        //    />        
        // </View>

        <>
        <Modal 
            visible={true}
        >
            <View style={styles.external_View}>
                <View style={styles.internal_View}>
                <Text> Add Todo </Text>
                <TextInput
                    placeholder="Add whatever you want to add"
                    // onChangeText= {textInput}
                    // value={text}
                />
                <View style={styles.third_View}>
                    <TouchableOpacity>
                        <Text>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text>Done</Text>
                    </TouchableOpacity>
                </View>
                
                </View>

            </View>
        </Modal>
    </>
    );
}



const styles = StyleSheet.create({
    external_View: {
        // transparent: 'true'
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        
        
    },

    internal_View: {
        borderRadius: 10,
        paddingRight: 5,
        borderWidth: 1,
        padding: 5,
    },

    third_View: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

  });
  
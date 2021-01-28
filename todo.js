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
            transparent={true}
        >
            <View style={styles.external_View}>
                <View style={styles.internal_View}>
                <Text style={styles.header_text}> Add Todo </Text>
                <TextInput
                    style={styles.input_Box}
                />
                <View style={styles.third_View}>
                    <TouchableOpacity>
                        <Text style={styles.text_style}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.text_style}>Done</Text>
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
        padding: 5,
        borderRadius: 20,
    },

    internal_View: {
        borderRadius: 15,
        paddingRight: 5,
        borderWidth: 1,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingTop: 15,
        paddingRight: 10,
        borderColor: "lightgray",
        
    },

    input_Box: {
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 10,
        height: 100,
    },

    third_View: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },

    header_text: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
    },

    text_style: {
        color: 'blue',
        fontSize: 20,
    }

  });
  
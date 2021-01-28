import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';



export default function heading (){

    return (
        <View style={styles.heading}>    
                <Text style={styles.header}> Today </Text>
                <TouchableOpacity style={styles.header_touchable}>
                    <Icon name="pluscircleo" size={40} color="#6495ED" />
                </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'black',
        marginTop: 5,
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    header_touchable: {
        fontWeight: 'bold',
        marginRight: 10,
        
    }

})
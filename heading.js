import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AddTodo from './src/components/AddTodo';
import { Colors } from './src/components/Colors';



export default function heading (){

    const [modalVal, setModalVal] = useState(false);

    const handleClick = () => {
        setModalVal(!modalVal)
    }

    return (
        <>
        <View style={styles.headingView}>    
                <Text style={styles.mainHeader}> Today </Text>
                <TouchableOpacity 
                    style={styles.header_touchable}
                    onPress={handleClick}
                >
                    <Icon name="pluscircleo" size={30} color={Colors.CornflowerBlue}/>
                </TouchableOpacity>
        </View>
       
            {
                modalVal?   <AddTodo  modalVal={modalVal} handleClick={ handleClick } /> : null
            }
        
        </>
    )

}

const styles = StyleSheet.create({
    headingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: Colors.black,
        marginTop: 5,
        paddingRight: 10,
    },
    mainHeader: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    headerTouchable: {
        fontWeight: 'bold',
        marginRight: 10,
        
    }
})

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Touchable, ViewPropTypes } from "react-native";

import { DeleteImage } from "../../assets/images";

const SingleNote = ({ title, onPressDelete, description, id, navigation, time }) => {
    const onDelete = () => {
        onPressDelete(id)

    }
    return (
        // <TouchableOpacity
        //     style={styles.container}
        //     onPress={() => {
        //         navigation.navigate('UpdateNote', { id : id})
        //     }}
        // >
        <View
            style={styles.container}
        >

                <TouchableOpacity
                    style={styles.button}
                    onPress={onDelete}    
                >
                    <Image
                        style={styles.deleteImage}
                        source={ DeleteImage }
                    />
            
                </TouchableOpacity>
            
                {title !== '' && (
                    <Text style={ styles.title}>
                        {title}
                    </Text>
                )}
                
                {description !== '' && (
                    <Text style={styles.description}>
                        {description}
                    </Text>
                )}
                
            <View style={ styles.timeAndDateContainer}>
                <Text style={ styles.timeAndDate}>
                    {time}
                </Text>
            </View>
                
        </View>
        // </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',

        borderWidth: 0.3,
        borderColor: '#cacbcc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: 'white',
        elevation: 4
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
        color: 'black'
    },
    description: {
        fontSize: 15,
        paddingHorizontal: 20,
        paddingVertical: 5,
        color: '#404f66',
        fontWeight: '500'
    },
    button: {
        position: 'absolute',
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 50,
        top: -10,
        right: 5,
        alignItems: 'center',
        justifyContent: 'center'
        // borderWidth: 1
    },
    deleteImage: {
        width: 30,
        height: 30,
        tintColor: 'black'
    },
    timeAndDateContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 18,
    },
    timeAndDate: {
        fontSize: 12,
        color: '#575757',
        width: 150,
    }
})

export default SingleNote
import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";

const AppButton = ({ onPress, lable, isDesable = false, textStyle, containerStyle}) => {
    return (
        <TouchableOpacity
            disabled={ isDesable}
            onPress={onPress}
            style={[styles.container, containerStyle]}
        >
            <Text style={ [styles.lable, textStyle]}>
                {lable} 
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7fff00',
        borderRadius: 50,
        minWidth: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lable: {
        margin: 5,
        color: 'white'
    }
})

export default AppButton
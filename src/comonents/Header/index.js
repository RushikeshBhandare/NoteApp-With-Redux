import React, { PureComponent } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class AppHeader extends PureComponent {
    constructor(props) {
        super(props)
    }
    
    onPressBAckButton = () => {
        this.props.navigation.navigate('ViewNotes')
    }
    
    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.showButton && (
                        <TouchableOpacity
                            onPress={this.onPressBAckButton}
                            style={styles.backButton}
                        >
                            <Text style={ styles.backButtonText}>back</Text>
                        </TouchableOpacity>
                    ) 
                }
                <Text style={ styles.lable}>
                    {this.props.lable}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1
    },
    backButton: {
        width: 60,
        height: 50,
        marginHorizontal: 10,
        lignItems: 'center',
        justifyContent: 'center',
    },
    lable: {
        flex: 1,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    backButtonText: {
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    }
})


export default AppHeader
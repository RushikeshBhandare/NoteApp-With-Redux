import React, { PureComponent } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addNote } from "../redux/actions";
import { bindActionCreators } from "redux";

import AppButton from "../comonents/AppButton";
import AppHeader from "../comonents/Header";



class AddNote extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: ''
        }
        
    }

    onPressAdd = () => {
        this.props.navigation.state.params.addNote({
            title: this.state.title,
            description: this.state.description
        })
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container}>
                <AppHeader showButton={ true} navigation={this.props.navigation} lable='Add note' />
                <View style={styles.inputContainer}>
                    <TextInput
                        value={this.state.title}
                        placeholder="Add title"
                        style={styles.titleInput}
                        onChangeText={(e) => { this.setState({title: e})}}

                    />
                    <View style={styles.descriptionContainer}>
                        <TextInput
                            value={this.state.description}
                            placeholder="Add title"
                            style={styles.descriptionInput}
                            multiline={true}
                            onChangeText={(e) => { this.setState({description: e})}}
                        />
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    {this.title === '' || this.state.description === '' ? (
                        <AppButton
                            isDesable={true}
                            lable='Add Note'
                            textStyle={{ fontWeight: 'bold' }}
                            containerStyle={{ backgroundColor: 'gray' }}
                        />
                    ): (
                            <AppButton
                            isDesable={ false}
                            lable='Add Note'
                            textStyle={{ fontWeight: 'bold' }}
                            containerStyle={{ backgroundColor: 'black' }}
                            onPress={this.onPressAdd}
                        />
                    )} 
                </View>
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    titleInput: {
        borderWidth: 1,
        marginVertical: 10,
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 20,
        borderColor: '#c9c9c9',
        borderRadius: 5
    },
    inputContainer: {
        marginHorizontal: 10,
        marginVertical: 20
    },
    descriptionContainer: {
        width: '100%',
        height: 300,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        borderRadius: 5

    },
    descriptionInput: {
        fontSize: 18   
    },
    buttonContainer: {
        width: 100,
        alignSelf: 'flex-end',
        marginHorizontal: 10
    }
    
})

const mapStateToProps = (state) => {
    const { notes } = state
    return { notes }
};

// const mapDispatchToProps = (dispatch) => (
//     bindActionCreators({
//         addNote
//     }, dispatch)
// )

export default connect (mapStateToProps)(AddNote)
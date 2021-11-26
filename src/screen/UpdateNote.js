import React, { PureComponent } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSingleNote } from "../redux/actions";
import { updateNote } from "../redux/actions";
import AppButton from "../comonents/AppButton";
import AppHeader from "../comonents/Header";



class UpdateNote extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: ''
        }
        
    }


    componentDidMount = () => {
        // this.setState({
        //     title: '',
        //     description: ''
        // })
        // console.log("data from Update Component ", this.props.navigation.state.params.id)
        this.props.getSingleNote(this.props.navigation.state.params.id)

        console.log("Get Single file ", this.props.singleNote[0])
            this.setState({
                title: this.props.singleNote[0].note.title,
                description: this.props.singleNote[0].note.description
            })
    }

  

    onPressUpdate = () => {
        this.props.updateNote({
            id: this.props.navigation.state.params.id,
            note: {
                title: this.state.title,
                description: this.state.description
            }

        })
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container}>
                <AppHeader showButton={ false} navigation={this.props.navigation} lable='Update Note' />
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
                            lable='Save'
                            textStyle={{ fontWeight: 'bold' }}
                            containerStyle={{ backgroundColor: 'gray' }}
                        />
                    ): (
                            <AppButton
                            isDesable={ false}
                            lable='Save'
                            textStyle={{ fontWeight: 'bold' }}
                            containerStyle={{ backgroundColor: 'black' }}
                            onPress={this.onPressUpdate}
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
    const { singleNote } = state
    return { singleNote }
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getSingleNote,
        updateNote
    }, dispatch)
)

export default connect (mapStateToProps, mapDispatchToProps)(UpdateNote)
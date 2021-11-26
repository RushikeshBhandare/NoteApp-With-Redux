import React, { PureComponent } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDataFromStorage } from "../redux/actions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { callReducer } from "../redux/actions";


import AppButton from '../comonents/AppButton'
import AppHeader from "../comonents/Header";
import { addNote } from "../redux/actions";
import { deleteNote } from "../redux/actions";
import SingleNote from "../comonents/SingleNote";

class ViewNote extends PureComponent {

    constructor(props) {
        super(props)
        // this.state = {
        //     notes: [
        //         {
        //             id: 1121,
        //             title: 'added A note',
        //             description: 'Yes yu did'
        //         }
        //     ]
        // }
    }
    
    onPressAddNote = () => {
        this.props.navigation.navigate("AddNote", { addNote: this.addNote })
    }

    
    componentDidMount = () => {
        console.log("###################")
        const getData = async () => {
            try {
              const value = await AsyncStorage.getItem('note')
                if (value !== null) {
                    this.props.getDataFromStorage(JSON.parse(value))
                    // console.log('storage value ',value)
                } else {
                    console.log('Data NOT FOUND in async Stoage ')
                }
            } catch(e) {
              console.log('error async storage View Component ', e)
            }
          }
          getData()
    }

    addNote = (note) => {
        this.props.notes.length !== 0 ? (
            note.id = this.props.notes.length + 1
        ) : (
            note.id = 1
        )
        this.props.addNote({
            title: note.title,
            description: note.description
        })
        
    }

    deleteNote = (id) => {
          this.props.deleteNote(id)
    }

    render() {     
        return (
            <View style={styles.constiner}>
                <AppHeader lable={'Note'}/>
                <View style={styles.titleContainer}>
                    {
                        this.props.notes.length === 0 ? (
                            <Text style={ styles.title}>
                                {/* You do not have any notes  */}
                                Press below to add note
                            </Text>
                        ) : ( 
                                <FlatList
                                    style={styles.flatlist}
                                    data={this.props.notes.reverse()}
                                    // keyExtractor={ data.id}
                                    renderItem={({ item }) => {
                                        console.log("Notes from View NOte Flatlist ",this.props.notes)
                                        return (
                                            <SingleNote
                                                id={item.id}
                                                onPressDelete={this.deleteNote}
                                                title={item.note.title}
                                                description={item.note.description}
                                                time={item.time}
                                                navigation={this.props.navigation}
                                            />
                                        )
                                    }}
                                    // inverted
                                    keyExtractor={item => item.id}
                                    showsVerticalScrollIndicator={ false}
                                />
                        )
                    }
                    
                    <View style={styles.buttonContainer}>
                        {
                            this.props.notes.length <= 0 ?
                                <AppButton
                                    textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}
                                    containerStyle={{backgroundColor: '#f5b042'}}
                                    lable='New note'
                                    onPress={this.onPressAddNote}        
                                /> :
                                <AppButton
                                    textStyle={{ color: 'white',  fontSize: 24 }}
                                    containerStyle={{backgroundColor: '#f5b042', width: 50}}
                                    lable='+'
                                    onPress={this.onPressAddNote}        
                                />
                        }
                        
                    </View>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    constiner: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#FFF'
    },
    titleContainer: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1
    },
    title: {
        fontSize: 20
    },
    flatlist: {
        width: '100%',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 100,
        // borderWidth: 1,
        flexDirection: 'column',
        alignItems: 'flex-end'
    }
})

const mapStateToProps = (state) => {
    const { notes } = state
    return { notes }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addNote,
        getDataFromStorage,
        deleteNote,
        callReducer
    }, dispatch)
  );

export default connect(mapStateToProps, mapDispatchToProps)(ViewNote)
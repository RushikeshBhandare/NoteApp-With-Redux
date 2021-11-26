const ADD_NOTE = 'ADD_NOTE';
const DELETE_NOTE = 'DELETE_NOTE'
const UPDATE_NOTE = "UPDATE_NOTE"
const GET_SINGLE_NOTE = 'GET_SINGLE_NOTE'
const GET_DATA_FROM_STORAGE = "GET_DATA_FROM_STORAGE"



export const addNote = (note) => {
    const payload = {
        note
    }
    return {
        type: ADD_NOTE,
        payload: payload
    }  
}

export const deleteNote = (id) => {
    const payload = {
        id
    }
    return {
        type: DELETE_NOTE,
        payload: payload
    }
}

export const updateNote = (note) => {
    const payload = {
        note
    }
    return {
        type: UPDATE_NOTE,
        payload: payload
    }
}

export const getSingleNote = (id) => {
    const payload = {
        id
    }
    return {
        type: GET_SINGLE_NOTE,
        payload: payload
    }
}

export const getDataFromStorage = (data) => {
    // console.log("get Data storage ", data )
    const payload = {
        data
    }
    return {
        type: GET_DATA_FROM_STORAGE,
        payload: payload
    }
}

export const callReducer = () => {
    console.log("Calling Call Reducer ")
    return {
        type: 'CALL_REDUCER',
    }
}
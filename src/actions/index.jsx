export const addItemHandler = item => {
    return dispatch => {
        dispatch({
            type : "ADD_ITEM",
        payload: {
            item : item
        }
        })
    }
}

export const removeItemHandler = id => {
    return dispatch => {
       dispatch({
        type : "REMOVE_ITEM",
        payload : {
            id : id
        }
       })
    }
}

export const clearCartHandle = () => {
    return dispatch => {
        dispatch({
            type : "CLEAR_ITEM"
        })
    }
}
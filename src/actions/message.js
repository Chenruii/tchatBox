export const ADD_MESSAGE ='ADD_MESSAGE';



// creer les actions Redux
export const addMessage = (message, username) => {
    return {
    type: 'ADD_MESSAGE',
    message,
    username,
    }
    }
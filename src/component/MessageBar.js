import React from 'react';

import { connect } from 'react-redux'
import { addMessage, ADD_MESSAGE } from '../actions/message'

let MessageBar = ({ dispatch })  => {
    return (
        <div>
            <form>
                <label>Nom:</label>
                <input placeholder= 'your name' type='text'   id=''/>
                <input placeholder= 'your message' type='text'  id='msg'/>
                <br />
                <button type="button"  value="Submit" onClick={event => {
                    event.preventDefault()
                    dispatch(addMessage(document.getElementById('msg').value))
                    document.getElementById('msg').value =''
                } }>Send</button>
            </form>
        </div>
    );}

    // methode connect
    MessageBar = connect()(MessageBar)
export default MessageBar




import React from 'react';
import MessageItem from './MessageItem';
import MessageBar from './MessageBar';

// connect aux composant
import { connect } from 'react-redux'
import { addMessage } from '../actions/message'

// connect aux composant
// injecte le state de vos reducers dans les props de vos composants
const mapStateToProps = (state) => {
    return {
    messages: state.messages.entities
    }
    }

// injecte les fonctions permettant de créer les actions dans vos composants
const mapDispatchToProps = (dispatch) => {
    return {
     onAddMessage: (message, username) => {
       dispatch(addMessage(message, username))
        }
        }
 }

 const MessageList = ({messages, onAddMessage}) => {
    return (
        <ul >
            {messages.map((item,i) => (
               <MessageItem  message={item.message}/>
            ))
            }
            <MessageBar />
        </ul>
    );
 }
export default connect(mapStateToProps, mapDispatchToProps)(MessageList)



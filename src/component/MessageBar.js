import React from 'react';

class MessageBar extends React.Component {
    render () {
        return (
            <div>
                <form>
                    <input placeholder= 'your message' type='text'></input>
                    <br />
                    <button>Send</button>
                </form>
            </div>
        ) 
    }
}
export default MessageBar;
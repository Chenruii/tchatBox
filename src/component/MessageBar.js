import React from 'react';

class MessageBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            send: ''
        };
        this.handleChange  = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({message:event.target.message});
    }
    handleSubmit(event) {
        event.preventDefault();
    }


    send = () => {
        console.log('this.props.message',this.props.message)
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Nom:</label>
                    <input placeholder= 'your name' type='text' onChange={this.handleChange} />
                    <input placeholder= 'your message' type='text' onChange={this.handleChange} />
                    <br />
                    <button type="button" onClick="{this.send}">Send</button>
                </form>
            </div>
        ) 
    }
}
export default MessageBar;
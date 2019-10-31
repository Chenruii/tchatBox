import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/user';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username : ''
        }
}
handleMessageChange = (event) => {
    this.setState({username: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addUser(this.state.username);
  }
  render(){
      return (
      <div>
          <p>Votre nom</p>
          <form>
              <input type="text" onChange={this.handleMessageChange}/>
              <button type="submit">rentrer</button>
          </form>
      </div>
    );
  }
}
  const mapDispatchToProps = {
    addUser
  }
  
  const mapStateToProps = (state) => ({
    username: state.user.currentUser
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
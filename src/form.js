import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
  state = {username: ''}

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get('https://api.github.com/users/' + this.state.username)
      .then(resp => {
        this.props.onSubmit(resp.data);
        this.setState({username: ''});
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input type="text"
           value={this.state.username}
           onChange={(event) => this.setState({ username: event.target.value})}
           placeholder="username" required/>
          <button type="submit">Add user</button>
      </form>
    );
  }
}

export default Form;

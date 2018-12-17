import React, { Component } from 'react';
import axios from 'axios';



class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',

    }
  }

  addNote = event => {
    event.preventDefault();
    axios 
      .post('https://backend-notes.herokuapp.com/api/notes/create', this.state)
      .then( () => this.props.history.push('/'))
      .catch( error => {
        console.error(error)
      })
  }


handleInputChange = event => {
  this.setState({ [event.target.name]: event.target.value })}

  render() {
    return(
      <div className="form-styles">
        <form onSubmit={this.addNote}>
          <h2>Create New Note:</h2>
          <input
            onChange={this.handleInputChange}
            placeholder="Note Title"
            value={this.state.title}
            name="title"
            type="text"
          />
          <textarea 
            onChange={this.handleInputChange}
            placeholder="Note Content"
            value={this.state.content}
            name="content"
            type="text"
          />
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default CreateNote;
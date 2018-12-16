import React from 'react';
import axios from 'axios';

import '../App.css';

export default class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      id: ''
    }
  }

  update = event => {
    event.preventDefault();
    axios 
      .put(`http://localhost:8000/api/notes/edit/${this.state.id}`, this.state)
      .then( response => this.props.history.push(`/get/${this.state.id}`))
      .then( () => this.props.history.push('/'))
      .catch( error => console.log(error))
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.selected(id);
  }

  selected = id => {
    axios 
      .get(`http://localhost:8000/api/notes/get/${id}`)
      .then( response => this.setState({ title: response.data.title, content: response.data.content, id: response.data.id}))
      .catch( error => console.log( error))
    }

    handleInputChange = event => {
      this.setState({ [event.target.name]: event.target.value})

    }
    render() {
      return (
        <div className="edit" >
          <form onSubmit={this.update} className="edit-styles" >
          <h2>Edit Note:</h2>
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
        <button type="submit">Update</button>
        </form>
        </div>
      )
    }

}